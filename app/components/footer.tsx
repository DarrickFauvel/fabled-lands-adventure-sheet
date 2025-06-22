import { currentYear } from "@/lib/helpers"

export default function Footer() {
  return (
    <footer>
      &copy; {currentYear()}{" "}
      <a href="https://darrickdevelops.com">Darrick Develops</a>. All rights
      reserved.
    </footer>
  )
}
