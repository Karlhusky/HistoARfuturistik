// Port dari QuizEngine (assets/js/quiz-engine.js) jadi komponen React.
// Render soal satu per satu, validasi jawaban, hitung skor.

import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { QuizQuestion } from "@/lib/histoar-types";
import { cn } from "@/lib/utils";

export function QuizPanel({
  questions,
  onFinish,
}: {
  questions: QuizQuestion[];
  onFinish: (score: number, total: number) => void;
}) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  const q = questions[index];
  const answered = selected !== null;
  const isLast = index === questions.length - 1;

  function selectAnswer(idx: number) {
    if (answered) return;
    setSelected(idx);
    if (idx === q.jawaban) setScore((s) => s + 1);
  }

  function next() {
    if (!answered) return;
    if (!isLast) {
      setIndex((i) => i + 1);
      setSelected(null);
    } else {
      const finalScore = selected === q.jawaban ? score : score;
      onFinish(finalScore, questions.length);
    }
  }

  return (
    <div className="glass mx-auto w-full max-w-2xl rounded-2xl p-6 sm:p-8">
      <div className="font-mono text-xs text-muted-foreground">
        Soal {index + 1} / {questions.length}
      </div>
      <h3 className="mt-3 font-display text-xl font-semibold leading-snug">{q.pertanyaan}</h3>

      <div className="mt-6 flex flex-col gap-2.5">
        {q.opsi.map((opsiText, idx) => {
          const isCorrect = idx === q.jawaban;
          const isPicked = idx === selected;
          return (
            <button
              key={idx}
              type="button"
              disabled={answered}
              onClick={() => selectAnswer(idx)}
              className={cn(
                "rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-sm transition-all",
                !answered && "hover:border-primary/50 hover:bg-white/[0.06]",
                answered && isCorrect && "border-emerald-400/60 bg-emerald-400/10 text-emerald-300",
                answered && isPicked && !isCorrect && "border-destructive/60 bg-destructive/10 text-destructive",
              )}
            >
              {opsiText}
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex justify-end">
        <Button onClick={next} disabled={!answered} className="bg-holo text-primary-foreground shadow-holo hover:opacity-90">
          {isLast ? "Lihat Hasil" : "Lanjut"}
        </Button>
      </div>
    </div>
  );
}
