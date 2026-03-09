import Link from "next/link";
import { loadPuzzles } from "@/lib/puzzles";

export default async function PlayIndex() {
  const puzzles = await loadPuzzles();
  return (
    <main>
      <h2 className="text-2xl font-bold text-indigo-700">Missions</h2>
      <ul className="mt-4 grid sm:grid-cols-2 gap-4">
        {puzzles.map((p: any) => (
          <li key={p.id} className="border rounded p-4 bg-white">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-slate-600 line-clamp-2">{p.scene}</p>
            <Link href={`/play/${p.id}`} className="text-sm text-indigo-700 underline mt-2 inline-block">
              Play
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
