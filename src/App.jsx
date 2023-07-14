import '/src/styles/App.css';
import Navbar from '/src/components/Navbar'
import Home from '/src/pages/Home';
import About from '/src/pages/About';
import Skills from '/src/pages/Skills';
import Project from '/src/pages/Project';
import Contact from '/src/pages/Contact';
import Footer from '/src/components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
