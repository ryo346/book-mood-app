"use client";

import { useRouter } from "next/navigation";
import type { Genre } from "@/lib/types";

const GENRES: { id: Genre; label: string; emoji: string; desc: string }[] = [
  { id: "novel", label: "小説", emoji: "📖", desc: "感動・冒険・恋愛など" },
  { id: "business", label: "ビジネス", emoji: "💼", desc: "仕事・お金・起業など" },
  { id: "self_help", label: "自己啓発", emoji: "🌱", desc: "習慣・メンタル・成長など" },
  { id: "culture", label: "教養", emoji: "🌍", desc: "歴史・科学・哲学など" },
];

export default function GenrePage() {
  const router = useRouter();

  function selectGenre(genre: Genre) {
    localStorage.setItem("genre", genre);
    localStorage.removeItem("answers");
    router.push("/questions");
  }

  return (
    <main className="flex flex-col min-h-screen px-6 py-12">
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-gray-900">ジャンルを選んでください</h2>
        <p className="text-gray-400 mt-2 text-sm">気になるジャンルを1つ選んでください</p>
      </div>

      <div className="space-y-3">
        {GENRES.map((g) => (
          <button
            key={g.id}
            onClick={() => selectGenre(g.id)}
            className="w-full bg-white hover:bg-indigo-50 active:scale-95 transition-all rounded-2xl shadow-sm px-5 py-4 flex items-center gap-4 text-left border border-transparent hover:border-indigo-200"
          >
            <span className="text-3xl">{g.emoji}</span>
            <div>
              <div className="font-bold text-gray-900 text-lg">{g.label}</div>
              <div className="text-sm text-gray-400">{g.desc}</div>
            </div>
          </button>
        ))}
      </div>
    </main>
  );
}
