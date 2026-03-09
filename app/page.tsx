import Link from "next/link";
import { loadPuzzles } from "@/lib/puzzles";
import ProgressBar from "@/components/ProgressBar";

export default async function Home() {
  const puzzles = await loadPuzzles();
  return (
    <section className="flex flex-col items-center text-center mt-10">
      <h1 className="text-4xl sm:text-5xl font-black text-indigo-700">
        Jerry &amp; Jasper: Save Miss Marit
      </h1>
      <p className="mt-4 max-w-2xl text-slate-700">
        Help the boys uncover clues, solve puzzles, and collect keys to rescue the real Miss Marit
        from her alien impostor!
      </p>
      <div className="w-full max-w-md mt-6">
        <ProgressBar total={puzzles.length} />
      </div>
      <Link
        href="/play"
        className="mt-6 inline-block bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700"
      >
        Start Adventure
      </Link>
    </section>
  );
}
