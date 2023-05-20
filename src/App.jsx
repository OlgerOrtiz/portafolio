
import './App.css'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Proyects from './components/Proyects'
import Skills from './components/Skills'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutMe />
      <Skills />
      <Proyects />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App
