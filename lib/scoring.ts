import type { Book, Genre, TagScore } from "./types";
import booksData from "@/data/books.json";

const books = booksData as Book[];

export function computeTagScore(answers: TagScore[]): TagScore {
  const total: TagScore = {};
  for (const answer of answers) {
    for (const [tag, value] of Object.entries(answer)) {
      total[tag] = (total[tag] ?? 0) + value;
    }
  }
  return total;
}

export function scoreBook(userTags: TagScore, book: Book): number {
  let score = 0;
  for (const [tag, userValue] of Object.entries(userTags)) {
    const bookValue = book.tags[tag] ?? 0;
    score += userValue * bookValue;
  }
  return score;
}

export function getTopBooks(userTags: TagScore, genre: Genre, count = 3): Book[] {
  const filtered = books.filter((b) => b.genre === genre);
  const scored = filtered.map((book) => ({
    book,
    score: scoreBook(userTags, book),
  }));
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, count).map((s) => s.book);
}
