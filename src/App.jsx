import { useState } from 'react';
import './App.css';
import Front from './components/Front';
import MatterJSAnimation from './components/MatterJSAnimation';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Education from './components/Education';
import ContactMe from './components/ContactMe';
function App() {
  const [animationFinished, setAnimationFinished] = useState(false);
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width;
    const y = (clientY - rect.top) / rect.height;
    
    const rotateX = (y - 0.5) * 30;
    const rotateY = (x - 0.5) * 30;
    setRotation({ rotateX, rotateY });
  };
  const handleAnimationEnd = () => {
    setAnimationFinished(true);
    // Smooth scroll to the project section
    window.scrollTo({
      top: window.innerHeight, // Scroll to the next section
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* <div className={`fixed inset-0 ${animationFinished ? 'hidden' : ''}`}> */}
        <MatterJSAnimation onAnimationEnd={handleAnimationEnd} />
      {/* </div> */}
      {/* <div className={`transition-opacity duration-500 ${animationFinished ? 'opacity-100' : 'opacity-0'}`}> */}
        {/* <h1 className='z-10 text-white'>Project Section</h1> */}
        <Front />

      {/* </div> */}

      <div className='w-full bg-gray-800 text-black  bottom-0  ' style={{
            transform: `perspective(1000px) rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
          }} >
          
          <AboutMe />
          <Skills/>
          <Projects />
          <Education/>
          <ContactMe />

          </div>
    </>
  );
}

export default App;
