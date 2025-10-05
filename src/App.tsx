import Sidebar from "./Components/Sidebar";
import AboutMe from "./Components/AboutMe";
import ProjetcsList from "./Components/ProjectsList";
import { useState } from "react";

function App() {
  const [isView, setIsView] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [aboutMeAnimation, setAboutMeAnimation] = useState('');
  const [projectsAnimation, setProjectsAnimation] = useState('');
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const toggleView = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    if (!isView) {
      setAboutMeAnimation('section-slide-out-left');
      
      setTimeout(() => {
        setIsView(true);
        setProjectsAnimation('section-slide-in-right');
        
        setTimeout(() => {
          setIsAnimating(false);
          setAboutMeAnimation('');
          setProjectsAnimation('');
        }, 500);
      }, 250);
    } else {
      setProjectsAnimation('section-slide-out-right');
      
      setTimeout(() => {
        setIsView(false);
        setAboutMeAnimation('section-slide-in-left');
        
        setTimeout(() => {
          setIsAnimating(false);
          setAboutMeAnimation('');
          setProjectsAnimation('');
        }, 500);
      }, 250);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-200">
      <Sidebar isFirstLoad={isFirstLoad} />
      <main className={`flex-1 p-6 transition-all duration-300 ml-[20%] relative overflow-hidden`}>
        {!isView && (
          <div className={`${aboutMeAnimation}`}>
            <AboutMe onToggleView={toggleView} isAnimating={isAnimating} isFirstLoad={isFirstLoad} setIsFirstLoad={setIsFirstLoad} />
          </div>
        )}
        
        {isView && (
          <div className={`${projectsAnimation}`}>
            <ProjetcsList toggleView={toggleView} />
          </div>
        )}
      </main>
    </div>
  )
}

export default App
