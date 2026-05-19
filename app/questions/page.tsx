"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Genre, TagScore } from "@/lib/types";
import { QUESTIONS } from "@/lib/questions";
import ProgressBar from "@/components/ProgressBar";

export default function QuestionsPage() {
  const router = useRouter();
  const [genre, setGenre] = useState<Genre | null>(null);
  const [current, setCurrent] = useState(0);
  const [accumulated, setAccumulated] = useState<TagScore>({});
  const [selected, setSelected] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const g = localStorage.getItem("genre") as Genre | null;
    if (!g) {
      router.replace("/genre");
      return;
    }
    setGenre(g);
  }, [router]);

  if (!genre) return null;

  const questions = QUESTIONS[genre];
  const q = questions[current];

  function handleSelect(idx: number) {
    if (animating) return;
    setSelected(idx);

    setTimeout(() => {
      const choiceTags = q.choices[idx].tags;
      const next: TagScore = { ...accumulated };
      for (const [tag, val] of Object.entries(choiceTags)) {
        next[tag] = (next[tag] ?? 0) + val;
      }

      if (current + 1 < questions.length) {
        setAccumulated(next);
        setCurrent(current + 1);
        setSelected(null);
        setAnimating(false);
      } else {
        localStorage.setItem("answers", JSON.stringify(next));
        router.push("/result");
      }
    }, 300);
    setAnimating(true);
  }

  return (
    <main className="flex flex-col min-h-screen px-6 py-10">
      <ProgressBar current={current + 1} total={questions.length} />

      <div className="mt-10 mb-8">
        <p className="text-xs font-semibold text-indigo-500 uppercase tracking-widest mb-2">
          Q{current + 1}
        </p>
        <h2 className="text-xl font-extrabold text-gray-900 leading-snug">{q.text}</h2>
      </div>

      <div className="space-y-3">
        {q.choices.map((choice, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx)}
            className={`w-full text-left rounded-2xl px-5 py-4 font-medium text-base transition-all border-2 shadow-sm active:scale-95
              ${selected === idx
                ? "bg-indigo-600 border-indigo-600 text-white shadow-md"
                : "bg-white border-transparent text-gray-800 hover:border-indigo-300 hover:bg-indigo-50"
              }`}
          >
            {choice.label}
          </button>
        ))}
      </div>
    </main>
  );
}
