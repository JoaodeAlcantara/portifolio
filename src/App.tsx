import Inicio from "./components/Inicio";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Sobre from "./components/Sobre";




function App() {

  

  return (
    <>
      <Header />

      <main>
        <Inicio />
        <Skills />
        <Projects />
        <Sobre />
      </main>
    </>
  )
}

export default App
