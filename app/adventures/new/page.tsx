import { AdventureForm } from "./components/form"

export default function NewAdventurePage() {
  return (
    <section>
      <h1>Start a New Adventure</h1>
      <p>
        Create your character and prepare to journey through the Fabled Lands.
      </p>

      <fieldset className="border-2 p-4">
        <legend>Adventure Sheet</legend>
        <AdventureForm />
      </fieldset>
    </section>
  )
}
