import { Body, Header } from "./components"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

const App = () => {
  return (
    <div>
      <Header/>
      <Body/>
      <About/>
      <Projects/>
      <Contact />
    </div>
  )
}

export default App