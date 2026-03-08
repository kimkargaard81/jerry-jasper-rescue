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

export function normalize(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}

/** Loads /puzzles.json via fetch (works on Vercel and locally). */
export async function loadPuzzles(): Promise<AnyPuzzle[]> {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const res = await fetch(`${base}/puzzles.json`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load puzzles.json");
  return (await res.json()) as AnyPuzzle[];
}
``
