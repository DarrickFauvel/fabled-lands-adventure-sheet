import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <p>Track your adventure through the open world of Harkuna and beyond.</p>
      <Link href='/adventures/new'>Start New Adventure</Link>
      <Link href='/adventures/continue'>Continue Adventure</Link>
    </main>
  )
}
