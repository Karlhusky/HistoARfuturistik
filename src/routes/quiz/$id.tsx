import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import materiData from "@/data/materi.json";
import quizData from "@/data/quiz.json";
import type { MateriData, QuizData } from "@/lib/histoar-types";
import { markMateriComplete } from "@/lib/progress";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { AuroraBackground } from "@/components/aurora-background";
import { CoreSample } from "@/components/histoar/CoreSample";
import { QuizPanel } from "@/components/histoar/QuizPanel";
import { Chatbot } from "@/components/histoar/Chatbot";

const { materi: materiList } = materiData as MateriData;
const { quiz: quizAll } = quizData as QuizData;

export const Route = createFileRoute("/quiz/$id")({
  loader: ({ params }) => {
    const materi = materiList.find((m) => m.id === params.id);
    const questions = quizAll[params.id];
    if (!materi || !questions) throw notFound();
    return { materi, questions };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `Quiz & HistoAI — ${loaderData?.materi.judul ?? ""} — HistoAR` }],
  }),
  component: QuizPage,
});

function QuizPage() {
  const { materi, questions } = Route.useLoaderData();
  const [result, setResult] = useState<{ score: number; total: number } | null>(null);
  const [unlocked, setUnlocked] = useState(false);

  const nextMateri = [...materiList].sort((a, b) => a.urutan - b.urutan).find((m) => m.urutan === materi.urutan + 1);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <AuroraBackground />
      <Nav />
      <div className="relative z-10 mx-auto max-w-3xl px-6 pt-32 pb-24">
        <div className="mb-6">
          <CoreSample currentMateriId={materi.id} />
        </div>

        {!result && (
          <QuizPanel
            questions={questions}
            onFinish={(score, total) => setResult({ score, total })}
          />
        )}

        {result && (
          <div className="glass mx-auto w-full max-w-2xl rounded-2xl p-6 sm:p-8">
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
              Hasil Quiz
            </span>
            <p className="mt-4 text-sm text-muted-foreground">Skor Kamu</p>
            <div className="font-display text-5xl font-semibold text-holo">
              {result.score}/{result.total}
            </div>

            <Chatbot
              materiId={materi.id}
              materiJudul={materi.judul}
              score={result.score}
              total={result.total}
              onFirstInteraction={() => {
                markMateriComplete(materi.id, result.score);
                setUnlocked(true);
              }}
            />

            <div className="mt-6">
              {unlocked ? (
                nextMateri ? (
                  <Link
                    to="/materi/$id"
                    params={{ id: nextMateri.id }}
                    className="inline-block rounded-full bg-holo px-5 py-3 text-sm font-semibold text-primary-foreground shadow-holo transition hover:opacity-90"
                  >
                    Lanjut ke {nextMateri.judul} →
                  </Link>
                ) : (
                  <Link
                    to="/materi"
                    className="inline-block rounded-full bg-holo px-5 py-3 text-sm font-semibold text-primary-foreground shadow-holo transition hover:opacity-90"
                  >
                    Semua materi selesai — Kembali ke daftar
                  </Link>
                )
              ) : (
                <>
                  <span className="inline-block cursor-not-allowed rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-muted-foreground">
                    Lanjut ke Materi Berikutnya →
                  </span>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Chat dulu dengan HistoAI minimal satu kali untuk membuka materi berikutnya.
                  </p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
