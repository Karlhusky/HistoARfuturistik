# HistoAR (Futuristik + TSX)

Port penuh dari [HistoAR](https://github.com/Karlhusky/HistoAR) (vanilla HTML/JS)
ke React + TypeScript, memakai base project & tampilan
[HistoAR-Futuristik](https://github.com/Karlhusky/HistoAR-Futuristik) (TanStack Start,
Tailwind v4, shadcn/ui, aurora/glass design).

**Datanya HistoAR asli, tampilannya Futuristik.** Semua konten (materi, soal quiz,
konfigurasi AR) diambil langsung dari `data/*.json` HistoAR — tidak ada konten dummy.

## Menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Yang sudah di-port

| Asal (HistoAR) | Jadi (di sini) |
| --- | --- |
| `index.html`, landing sections | `src/routes/index.tsx` + `src/components/sections/*` (base Futuristik, CTA diarahkan ke `/materi`) |
| `materi.html` + `materi-loader.js` | `src/routes/materi/index.tsx` + `src/components/histoar/MateriGrid.tsx` |
| `materi-detail.html` + `ar-controller.js` (MindAR/A-Frame) | `src/routes/materi/$id.tsx` + `src/components/histoar/ArScan.tsx` + `src/lib/ar-engine.ts` |
| `hasil-quiz.html` + `quiz-engine.js` + `quiz-controller.js` | `src/routes/quiz/$id.tsx` + `src/components/histoar/QuizPanel.tsx` |
| `chatbot.js` (HistoAI) | `src/components/histoar/Chatbot.tsx` |
| `api/chat.js` | `src/routes/api/chat.ts` (server route TanStack Start) |
| `progress.js` (localStorage) | `src/lib/progress.ts` |
| `router.js` → `renderCoreSample` | `src/components/histoar/CoreSample.tsx` |
| `data/materi.json`, `quiz.json`, `ar.json` | `src/data/*.json` (disalin apa adanya) |
| `assets/ar/targets/*.mind` | `public/assets/ar/targets/*.mind` |

Logic AR (MindAR + A-Frame) sengaja tetap ditulis imperatif di `ar-engine.ts`
(bukan dipaksa jadi komponen React murni) karena A-Frame bekerja lewat custom
element & manipulasi DOM langsung — react hanya membungkus lifecycle-nya
(mount/unmount lewat `useEffect`, cleanup lewat `dispose()`).

## Yang perlu kamu lengkapi sendiri

1. **Model 3D & audio** — file `.glb` dan `.mp3` yang direferensikan di
   `src/data/ar.json` (mis. `assets/models/sekarang.glb`) belum ada di repo asal
   HistoAR (folder `assets/models/` & `assets/audio/` masih kosong di GitHub).
   Taruh file-nya di `public/assets/models/` dan `public/assets/audio/` dengan
   path yang sama persis seperti di `ar.json`.
2. **`KIE_AI_API_KEY`** — env var untuk `/api/chat` (proxy ke Gemini via kie.ai),
   sama seperti di HistoAR asli. Set di `.env` lokal atau secrets platform deploy.
3. Target `.mind` untuk `empat-masa-kehidupan-manusia-praaksara` dan
   `tiga-jenis-manusia-purba` di `public/assets/ar/targets/` masih berupa folder
   (bukan file `.mind` langsung) — sesuaikan path di `ar.json` kalau strukturnya
   beda dari HistoAR asli.

## Struktur baru yang ditambahkan

```
src/
├── data/                    # materi.json, quiz.json, ar.json (dari HistoAR)
├── lib/
│   ├── histoar-types.ts     # tipe data materi/quiz/AR
│   ├── progress.ts          # localStorage progres belajar
│   ├── markdown-lite.tsx    # render **bold**/*italic* di chat, tanpa dangerouslySetInnerHTML
│   ├── ar-engine.ts         # port ar-controller.js
│   └── load-script.ts       # loader A-Frame/MindAR
├── components/histoar/
│   ├── MateriGrid.tsx
│   ├── CoreSample.tsx
│   ├── QuizPanel.tsx
│   ├── Chatbot.tsx
│   └── ArScan.tsx
└── routes/
    ├── materi/index.tsx
    ├── materi/$id.tsx
    ├── quiz/$id.tsx
    └── api/chat.ts
```

Sisanya (routing, build config, design tokens `src/styles.css`, komponen
`nav.tsx`/`footer.tsx`/`aurora-background.tsx`/dst) tetap dari base
HistoAR-Futuristik.
