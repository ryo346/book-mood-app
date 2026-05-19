import type { Book } from "@/lib/types";

interface BookCardProps {
  book: Book;
  rank: number;
}

const rankColors = ["bg-yellow-400", "bg-gray-300", "bg-amber-600"];
const rankLabels = ["1st", "2nd", "3rd"];

export default function BookCard({ book, rank }: BookCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 flex gap-4 items-start">
      <div
        className={`${rankColors[rank]} text-white text-xs font-bold rounded-full w-9 h-9 flex items-center justify-center shrink-0`}
      >
        {rankLabels[rank]}
      </div>
      <div className="min-w-0">
        <h3 className="font-bold text-gray-900 text-base leading-snug">{book.title}</h3>
        <p className="text-sm text-indigo-600 mt-0.5">{book.author}</p>
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">{book.description}</p>
      </div>
    </div>
  );
}
