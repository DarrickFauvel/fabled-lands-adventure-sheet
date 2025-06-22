import Link from "next/link"

export default function Header() {
  return (
    <header>
      <nav className="flex justify-between">
        <Link href="/" className="flex flex-col">
          <span>Fabled Lands</span>
          <span>Adventure Sheet</span>
        </Link>
        <ul>
          <li>New Sheet</li>
        </ul>
      </nav>
    </header>
  )
}
