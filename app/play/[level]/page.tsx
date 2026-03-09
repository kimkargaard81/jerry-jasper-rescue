import { loadPuzzles } from "@/lib/puzzles";
import WordLock from "@/components/puzzles/WordLock";
import CaesarShift from "@/components/puzzles/CaesarShift";
import ImageHotspot from "@/components/puzzles/ImageHotspot";
import Link from "next/link";

export default async function LevelPage({ params }: { params: { level: string } }) {
  const puzzles = await loadPuzzles();
  const puzzle = puzzles.find((p: any) => p.id === params.level);
  if (!puzzle) return <div className="p-8">Level not found.</div>;

  const map: Record<string, any> = {
    wordlock: WordLock,
    caesar: CaesarShift,
    hotspot: ImageHotspot,
  };
  const Comp = map[puzzle.type] ?? (() => <div>Unknown puzzle type.</div>);

  return (
    <div className="mt-4">
      <Comp puzzle={puzzle} />
      <div className="max-w-2xl mx-auto flex justify-between mt-6">
        <Link href="/play" className="text-sm text-indigo-700 underline">← Back to Missions</Link>
        <Link href={`/play/${getNextId(puzzles, puzzle.id)}`} className="text-sm text-indigo-700 underline">
          Next →
        </Link>
      </div>
    </div>
  );
}

function getNextId(puzzles: any[], currentId: string) {
  const idx = puzzles.findIndex((p: any) => p.id === currentId);
  const next = puzzles[idx + 1] ?? puzzles[0];
  return next.id;
}
