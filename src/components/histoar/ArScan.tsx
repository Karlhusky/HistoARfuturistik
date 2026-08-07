// Port dari materi-detail.html (mode AR) - restyle ala HistoAR-Futuristik,
// logic imperatif MindAR/A-Frame tetap dipakai lewat ArEngine.

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { loadScript } from "@/lib/load-script";
import { ArEngine } from "@/lib/ar-engine";
import type { ArMateriConfig } from "@/lib/histoar-types";
import { ChevronLeft, Info, Plus, Minus, RotateCcw, Ruler, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, X } from "lucide-react";

export function ArScan({
  materiId,
  materiJudul,
  arConfig,
  onAllExplored,
}: {
  materiId: string;
  materiJudul: string;
  arConfig: ArMateriConfig;
  onAllExplored: () => void;
}) {
  const navigate = useNavigate();
  const engineRef = useRef<ArEngine | null>(null);
  const [ready, setReady] = useState(false);
  const [scanHintVisible, setScanHintVisible] = useState(true);
  const [showViewControls, setShowViewControls] = useState(false);
  const [showMoveControls, setShowMoveControls] = useState(false);
  const [panelHidden, setPanelHidden] = useState(true);
  const [reopenVisible, setReopenVisible] = useState(false);
  const [gate, setGate] = useState({ done: 0, total: 0, unlocked: false });
  const [modelError, setModelError] = useState<string | null>(null);
  const [restartToken, setRestartToken] = useState(0);

  useEffect(() => {
    let cancelled = false;

    async function boot() {
      // Di-serve dari origin sendiri (public/vendor/), BUKAN CDN. Dua alasan:
      // 1) service worker nggak bisa precache script cross-origin dengan andal,
      //    jadi selama ini dari aframe.io/jsdelivr, mode offline mustahil dibikin.
      // 2) jaringan sekolah kadang nge-filter atau nge-throttle CDN. Kalau itu
      //    kejadian, AR gagal start di depan kelas tanpa error yang berguna.
      // Versi + checksum ada di public/vendor/VENDOR.md, dicek scripts/check-vendor.mjs.
      await loadScript("/vendor/aframe-1.5.0.min.js");
      await loadScript("/vendor/mindar-image-aframe-1.2.5.prod.js");
      if (cancelled) return;

      setModelError(null);
      const engine = new ArEngine(arConfig, {
        onGateUpdate: (done, total, unlockedNow) => setGate({ done, total, unlocked: unlockedNow }),
        onQuizReady: onAllExplored,
        onModelError: (targetKey, src) => setModelError(`Model "${targetKey}" gagal dimuat (${src}).`),
      });
      engineRef.current = engine;
      engine.start();
      setReady(true);

      // Sinkronkan panel/kontrol yang di-toggle imperatif oleh engine via observer ringan.
      const panelEl = document.getElementById("arPanel");
      const scanHintEl = document.getElementById("arScanHint");
      const reopenEl = document.getElementById("arReopenBtn");
      const viewControlsEl = document.getElementById("arViewControls");
      const moveControlsEl = document.getElementById("arMoveControls");

      const observer = new MutationObserver(() => {
        if (panelEl) setPanelHidden(panelEl.hidden);
        if (scanHintEl) setScanHintVisible(!scanHintEl.hidden);
        if (reopenEl) setReopenVisible(!reopenEl.hidden);
        if (viewControlsEl) setShowViewControls(!viewControlsEl.hidden);
        if (moveControlsEl) setShowMoveControls(!moveControlsEl.hidden);
      });
      [panelEl, scanHintEl, reopenEl, viewControlsEl, moveControlsEl].forEach((el) => {
        if (el) observer.observe(el, { attributes: true, attributeFilter: ["hidden"] });
      });

      return () => observer.disconnect();
    }

    const cleanupPromise = boot();

    return () => {
      cancelled = true;
      cleanupPromise.then((cleanup) => cleanup?.());
      engineRef.current?.dispose();
      engineRef.current = null;
      // Jaring pengaman kalau engine keburu unmount sebelum sempat dibikin:
      // class dari A-Frame ini yang bikin halaman lain kekunci nggak bisa discroll.
      document.documentElement.classList.remove("a-fullscreen");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [materiId, restartToken]);

  // Ngulang boot() dari nol: dispose paksa stream kamera lama + rebuild scene,
  // biar user nggak perlu hard refresh browser kalau kamera macet.
  const restartCamera = () => {
    setReady(false);
    setModelError(null);
    setRestartToken((n) => n + 1);
  };

  const gateReady = gate.total > 0 && gate.done >= gate.total;

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <header className="glass fixed inset-x-0 top-0 z-30 flex items-center gap-4 px-4 py-3">
        <button
          onClick={() => navigate({ to: "/materi" })}
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" /> Kembali
        </button>
        <h1 className="font-display text-sm font-semibold">{materiJudul}</h1>
        <button
          onClick={restartCamera}
          className="ml-auto flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <RotateCcw className="h-4 w-4" /> Kamera bermasalah?
        </button>
      </header>

      <div id="arSceneRoot" className="ar-scene-root fixed inset-0" />

      {modelError && (
        <div className="glass-strong fixed left-1/2 top-20 z-30 -translate-x-1/2 rounded-2xl px-4 py-2 text-center font-mono text-xs text-destructive">
          {modelError}
          <br />
          Cek console browser untuk detail error, atau tap &quot;Kamera bermasalah?&quot; buat coba lagi.
        </div>
      )}

      {!ready && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-background">
          <div className="flex flex-col items-center gap-3 text-sm text-muted-foreground">
            <span className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            Memuat mode AR…
          </div>
        </div>
      )}

      {scanHintVisible && ready && (
        <div id="arScanHint" className="glass fixed left-1/2 top-20 z-20 -translate-x-1/2 rounded-full px-4 py-2 font-mono text-xs text-muted-foreground">
          Arahkan kamera ke gambar target di buku/kartu
        </div>
      )}
      {!scanHintVisible && <div id="arScanHint" hidden />}

      <button
        id="arReopenBtn"
        hidden={!reopenVisible}
        onClick={() => engineRef.current?.reopenPanel()}
        aria-label="Buka info lagi"
        className="glass fixed bottom-24 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full"
      >
        <Info className="h-5 w-5" />
      </button>

      <div
        id="arViewControls"
        hidden={!showViewControls}
        className="glass fixed right-4 top-24 z-20 flex flex-col gap-2 rounded-2xl p-2"
      >
        <button id="btnZoomIn" onClick={() => engineRef.current?.zoomIn()} aria-label="Perbesar model" className="flex h-9 w-9 items-center justify-center rounded-xl hover:bg-white/10">
          <Plus className="h-4 w-4" />
        </button>
        <button id="btnZoomOut" onClick={() => engineRef.current?.zoomOut()} aria-label="Perkecil model" className="flex h-9 w-9 items-center justify-center rounded-xl hover:bg-white/10">
          <Minus className="h-4 w-4" />
        </button>
        <button id="btnResetView" onClick={() => engineRef.current?.resetView()} aria-label="Reset tampilan" className="flex h-9 w-9 items-center justify-center rounded-xl hover:bg-white/10">
          <RotateCcw className="h-4 w-4" />
        </button>
        <button id="btnCopyView" onClick={() => engineRef.current?.copyCurrentView()} aria-label="Salin posisi kamera" title="Salin posisi buat ditempel ke ar.json" className="flex h-9 w-9 items-center justify-center rounded-xl hover:bg-white/10">
          <Ruler className="h-4 w-4" />
        </button>
      </div>

      <div
        id="arMoveControls"
        hidden={!showMoveControls}
        className="glass fixed bottom-24 left-4 z-20 grid grid-cols-3 gap-1 rounded-2xl p-2"
      >
        <span />
        <button id="btnMoveUp" onClick={() => engineRef.current?.moveUp()} className="flex h-9 w-9 items-center justify-center rounded-xl hover:bg-white/10"><ArrowUp className="h-4 w-4" /></button>
        <span />
        <button id="btnMoveLeft" onClick={() => engineRef.current?.moveLeft()} className="flex h-9 w-9 items-center justify-center rounded-xl hover:bg-white/10"><ArrowLeft className="h-4 w-4" /></button>
        <span />
        <button id="btnMoveRight" onClick={() => engineRef.current?.moveRight()} className="flex h-9 w-9 items-center justify-center rounded-xl hover:bg-white/10"><ArrowRight className="h-4 w-4" /></button>
        <span />
        <button id="btnMoveDown" onClick={() => engineRef.current?.moveDown()} className="flex h-9 w-9 items-center justify-center rounded-xl hover:bg-white/10"><ArrowDown className="h-4 w-4" /></button>
        <span />
      </div>

      <div id="arCopyToast" hidden className="glass fixed bottom-4 left-1/2 z-30 -translate-x-1/2 whitespace-pre rounded-xl px-4 py-2 font-mono text-xs" />

      <div
        id="arPanel"
        hidden={panelHidden}
        className="glass-strong fixed inset-x-0 bottom-0 z-20 max-h-[55vh] overflow-y-auto rounded-t-3xl p-5"
      >
        <div className="flex items-center justify-between">
          <h2 id="arPanelTitle" className="font-display text-lg font-semibold">
            —
          </h2>
          <button id="arPanelClose" onClick={() => engineRef.current?.closePanel()} aria-label="Tutup panel" className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div id="arHotspotRow" className="mt-3 flex flex-wrap gap-2 empty:hidden [&_.ar-hotspot-pill]:rounded-full [&_.ar-hotspot-pill]:border [&_.ar-hotspot-pill]:border-white/10 [&_.ar-hotspot-pill]:bg-white/[0.03] [&_.ar-hotspot-pill]:px-3 [&_.ar-hotspot-pill]:py-1.5 [&_.ar-hotspot-pill]:text-xs [&_.ar-hotspot-pill.is-active]:bg-holo [&_.ar-hotspot-pill.is-active]:text-primary-foreground [&_.ar-hotspot-pill.is-visited-pill]:border-holo/50 [&_.ar-hotspot-pill:disabled]:opacity-40" />

        <p id="arPanelDesc" className="mt-3 text-sm leading-relaxed text-muted-foreground [&:not(.is-expanded)]:line-clamp-3">
          —
        </p>
        <button
          id="arDescToggle"
          hidden
          onClick={() => engineRef.current?.toggleDesc()}
          className="mt-1 text-xs font-medium text-primary"
        >
          Baca selengkapnya ▾
        </button>

        <div id="arProgressDots" className="mt-4 flex gap-1.5 [&_.ar-dot]:h-1.5 [&_.ar-dot]:w-1.5 [&_.ar-dot]:rounded-full [&_.ar-dot]:bg-white/15 [&_.ar-dot.is-visited]:bg-holo" />

        <button
          id="btnKeQuiz"
          disabled={!gateReady}
          onClick={() => gateReady && navigate({ to: "/quiz/$id", params: { id: materiId } })}
          className="mt-5 w-full rounded-full bg-holo px-4 py-3 text-sm font-semibold text-primary-foreground shadow-holo transition disabled:cursor-not-allowed disabled:opacity-40"
        >
          {gateReady ? "Lanjut ke Quiz →" : `🔒 Jelajahi semua bagian dulu (${gate.done}/${gate.total || "…"})`}
        </button>
        <p id="arGateNote" className="mt-2 text-center text-xs text-muted-foreground">
          {gateReady
            ? "Semua bagian sudah dijelajahi. Mantap!"
            : gate.total
              ? `Sisa ${gate.total - gate.done} bagian lagi yang belum di-tap.`
              : ""}
        </p>
      </div>
    </div>
  );
}
