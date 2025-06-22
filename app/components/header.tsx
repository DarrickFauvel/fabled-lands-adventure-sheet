import Link from "next/link"
import { ModeToggle } from "./mode-toggle"

export default function Header() {
  return (
    <header>
      <nav className="flex justify-between">
        <Link href="/" className="flex flex-col">
          <span>Fabled Lands</span>
          <span>Adventure Sheet</span>
        </Link>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  )
}
