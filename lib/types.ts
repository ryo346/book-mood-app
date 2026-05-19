export type Genre = "novel" | "business" | "self_help" | "culture";

export interface Choice {
  label: string;
  tags: Record<string, number>;
}

export interface Question {
  text: string;
  choices: Choice[];
}

export interface Book {
  title: string;
  author: string;
  genre: Genre;
  description: string;
  tags: Record<string, number>;
}

export type TagScore = Record<string, number>;

export interface DiagnosisState {
  genre: Genre;
  answers: TagScore;
}
