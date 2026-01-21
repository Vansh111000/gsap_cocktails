import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
//SplitText will help us animate word by word in text
//This is how we setup gsap at start4

gsap.registerPlugin(ScrollTrigger, SplitText)
const App = () => {
  return (
    <div className='flex-center h-screen'>
      <h1 className='text-3xl text-indigo-50'>hello gsap!</h1>
    </div>
  )
}

export default App