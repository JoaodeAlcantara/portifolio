import Inicio from "./components/Inicio";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Sobre from "./components/Sobre";
import { useEffect, useRef, useState } from "react";



function App() {

  const inicioRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const sobreRef = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState({
    inicio: false,
    skills: false,
    projects: false,
    sobre: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.target === inicioRef.current) {
            setVisible(v => ({ ...v, inicio: en.isIntersecting }));
        }
        if (en.target === skillsRef.current) {
          setVisible(v => ({ ...v, skills: en.isIntersecting }));
        }
        if (en.target === projectsRef.current) {
          setVisible(v => ({ ...v, projects: en.isIntersecting }));
        }
        if (en.target === sobreRef.current) {
          setVisible(v => ({ ...v, sobre: en.isIntersecting }));
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -20% 0px' });

    if (inicioRef.current) observer.observe(inicioRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (sobreRef.current) observer.observe(sobreRef.current);

    return () => observer.disconnect();
  }, []);


  return (
    <>
      <Header />

      <main>
        <Inicio inicioRef={inicioRef} isVisible={visible.inicio} />
        <Skills skillsRef={skillsRef} isVisible={visible.skills} />
        <Projects projectsRef={projectsRef} isVisible={visible.projects} />
        <Sobre sobreRef={sobreRef} isVisible={visible.sobre} />
      </main>
    </>
  )
}

export default App
