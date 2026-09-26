import gsap from "gsap"
import { Draggable } from "gsap/src/Draggable"

import { Dock, Navbar, Welcome } from "./components"
import { Safari, Terminal, Resume, Finder, Text, Image, Contact } from "#windows"
// import { Contact } from "lucide-react"

gsap.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
    </main>
  )
}

export default App
