import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jerry & Jasper: Save Miss Marit",
  description: "Solve puzzles, collect keys, save the real Miss Marit!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="font-bold text-indigo-700">Jerry &amp; Jasper</Link>
            <div className="flex items-center gap-4">
              <Link href="/play" className="text-sm text-indigo-700 underline">Play</Link>
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-slate-500"
              >
                Powered by Next.js
              </a>
            </div>
          </div>
        </nav>
        <main className="max-w-4xl mx-auto p-4">{children}</main>
        <footer className="text-center text-xs text-slate-500 py-6">
          © {new Date().getFullYear()} Jerry &amp; Jasper Adventures
        </footer>
      </body>
    </html>
  );
}

