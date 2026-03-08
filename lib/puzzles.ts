import puzzlesData from "@/puzzles.json";

export type PuzzleBase = {
  id: string; title: string; scene: string; type: string;
  hint?: string; reward?: string; normalize?: boolean;
};

export type WordLock = PuzzleBase & {
  type: "wordlock"; prompt: string; body: string; answer: string;
};

export type Caesar = PuzzleBase & {
  type: "caesar"; shift: number; cipherText: string; answer: string;
};

export type Hotspot = PuzzleBase & {
  type: "hotspot";
  image: string;
  hotspots: { x: number; y: number; r: number; id: string }[];
  successText?: string;
};

export type AnyPuzzle = WordLock | Caesar | Hotspot;

/** No fetch needed — import JSON directly (works in Vercel). */
export async function loadPuzzles(): Promise<AnyPuzzle[]> {
  return puzzlesData as AnyPuzzle[];
}

export function normalize(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}
