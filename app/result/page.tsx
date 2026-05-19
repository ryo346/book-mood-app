"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { Book, Genre, TagScore } from "@/lib/types";
import { getTopBooks } from "@/lib/scoring";
import BookCard from "@/components/BookCard";

const GENRE_LABELS: Record<Genre, string> = {
  novel: "小説",
  business: "ビジネス",
  self_help: "自己啓発",
  culture: "教養",
};

export default function ResultPage() {
  const router = useRouter();
  const [books, setBooks] = useState<Book[]>([]);
  const [genre, setGenre] = useState<Genre | null>(null);

  useEffect(() => {
    const g = localStorage.getItem("genre") as Genre | null;
    const raw = localStorage.getItem("answers");
    if (!g || !raw) {
      router.replace("/");
      return;
    }
    const answers: TagScore = JSON.parse(raw);
    setGenre(g);
    setBooks(getTopBooks(answers, g));
  }, [router]);

  if (!genre || books.length === 0) return null;

  return (
    <main className="flex flex-col min-h-screen px-6 py-10">
      <div className="mb-6">
        <p className="text-xs font-semibold text-indigo-500 uppercase tracking-widest mb-1">
          {GENRE_LABELS[genre]} / 診断結果
        </p>
        <h2 className="text-2xl font-extrabold text-gray-900">あなたにおすすめの3冊</h2>
        <p className="text-sm text-gray-400 mt-1">今の気分にぴったりの本を選びました</p>
      </div>

      <div className="space-y-4">
        {books.map((book, i) => (
          <BookCard key={book.title} book={book} rank={i} />
        ))}
      </div>

      <div className="mt-8 space-y-3">
        <Link
          href="/genre"
          className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all text-white font-bold py-4 rounded-2xl shadow"
        >
          もう一度診断する
        </Link>
        <Link
          href="/"
          className="block w-full text-center bg-white hover:bg-gray-50 active:scale-95 transition-all text-gray-600 font-medium py-3 rounded-2xl border border-gray-200"
        >
          トップへ戻る
        </Link>
      </div>
    </main>
  );
}
