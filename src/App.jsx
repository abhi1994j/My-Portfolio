import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Hero from "./pages/Hero"
import Projects from "./pages/Projects"

function App() {

  return (
    <>
        <Navbar/> 
        <Hero/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App
