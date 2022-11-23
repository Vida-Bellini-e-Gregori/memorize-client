
export enum Difficulty {
  EASY = 1,
  MEDIUM = 2,
  HARD = 3,
}

export type DifficultyType = {
  id: number;
  label: string;
  interval: number;
}