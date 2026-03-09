// lib/progress.ts
export type Progress = { solved: Record<string, boolean>; inventory: string[] };
const KEY = "jj-progress-v1";

export function getProgress(): Progress {
  if (typeof window === "undefined") return { solved: {}, inventory: [] };
  try { return JSON.parse(localStorage.getItem(KEY) || "") as Progress; }
  catch { return { solved: {}, inventory: [] }; }
}

export function markSolved(id: string, reward?: string) {
  const p = getProgress();
  p.solved[id] = true;
  if (reward && !p.inventory.includes(reward)) p.inventory.push(reward);
  localStorage.setItem(KEY, JSON.stringify(p));
}

export function resetProgress() {
  if (typeof window !== "undefined") localStorage.removeItem(KEY);
}
