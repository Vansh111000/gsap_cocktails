import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
//SplitText will help us animate word by word in text
//This is how we setup gsap at start4

gsap.registerPlugin(ScrollTrigger, SplitText)
const App = () => {
  return (
  <main>
    <Navbar /> 
    <Hero />
    <div className="h-dvh bg-black"></div>
  </main>
  )
}

export default App