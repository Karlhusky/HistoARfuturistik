import { useState } from "react";
import { Check, X, RotateCcw } from "lucide-react";

const questions = [
  {
    q: "Periodisasi Geologi Paling tua adalah?",
    options: ["Arkaekum", "Paleozoikum", "Mesozoikum", "Neozoikum"],
    correct: 0,
  },
  {
    q: "Pada masa Mesozoikum, bagaimana kehidupan manusia praaksara",
    options: ["Bercocok Tanam", "Berburu dan meramu", "Berburu dan bercocok tanam", "Meramu dan bercocok tanam"],
    correct: 1,
  },
  {
    q: "Siapa Penemu kerangka manusia purba Pithecanthropus?",
    options: ["G.H.R. von Koenigswald", "B.D. van Rietschoten", "Eugene Dubois", "von Koenigswald"],
    correct: 2,
  },
];

export function Quiz() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const current = questions[index];

  function choose(i: number) {
    if (selected !== null) return;
    setSelected(i);
    if (i === current.correct) setScore((s) => s + 1);
    setTimeout(() => {
      if (index + 1 >= questions.length) setDone(true);
      else {
        setIndex(index + 1);
        setSelected(null);
      }
    }, 900);
  }
  function reset() {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  }

  return (
    <section id="quiz" className="relative mx-auto max-w-4xl px-6 py-32">
      <div className="mb-10 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
          Test yourself
        </div>
        <h2 className="font-display text-4xl font-semibold sm:text-6xl">
          Prove you were <span className="text-holo">there</span>.
        </h2>
      </div>

      <div className="glass-strong overflow-hidden rounded-3xl p-8 sm:p-10">
        {!done ? (
          <>
            <div className="mb-6 flex items-center justify-between text-xs text-muted-foreground">
              <span className="font-mono">
                Question {index + 1} / {questions.length}
              </span>
              <span className="font-mono">Score {score}</span>
            </div>
            <div className="mb-2 h-1 w-full overflow-hidden rounded-full bg-white/5">
              <div
                className="h-full bg-holo transition-all duration-500"
                style={{ width: `${((index + 1) / questions.length) * 100}%` }}
              />
            </div>
            <h3 className="mt-8 font-display text-2xl font-semibold sm:text-3xl">
              {current.q}
            </h3>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {current.options.map((opt, i) => {
                const isCorrect = selected !== null && i === current.correct;
                const isWrong =
                  selected === i && i !== current.correct;
                return (
                  <button
                    key={opt}
                    onClick={() => choose(i)}
                    disabled={selected !== null}
                    className={`group relative flex items-center justify-between rounded-2xl glass px-5 py-4 text-left text-sm transition hover:-translate-y-0.5 hover:bg-white/10 disabled:cursor-not-allowed ${
                      isCorrect
                        ? "ring-2 ring-holo bg-holo/10"
                        : isWrong
                          ? "ring-2 ring-destructive bg-destructive/10"
                          : ""
                    }`}
                  >
                    <span>{opt}</span>
                    {isCorrect && <Check className="h-4 w-4 text-holo" />}
                    {isWrong && <X className="h-4 w-4 text-destructive" />}
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-holo/10 ring-1 ring-holo/40">
              <span className="font-display text-3xl font-bold text-holo">
                {score}/{questions.length}
              </span>
            </div>
            <h3 className="mt-6 font-display text-3xl font-semibold">
              {score === questions.length
                ? "Curator level."
                : score >= questions.length / 2
                  ? "Nicely done."
                  : "Back to the exhibit!"}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Share your score, or dive back into the timeline.
            </p>
            <button
              onClick={reset}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-holo px-6 py-3 text-sm font-semibold text-primary-foreground shadow-holo"
            >
              <RotateCcw className="h-4 w-4" /> Try again
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
