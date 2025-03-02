import About from "./components/organisms/About";
import Projects from "./components/organisms/Projects";
import Resume from "./components/organisms/Resume";
import Contact from "./components/organisms/Contact";
import Navbar from "./components/molecules/Navbar";
import useMyContext from "./hooks/useMyContext";

import Aside from "./components/molecules/Aside";
function App() {
  const { content, setOpenNav, openNav } = useMyContext();
  return (
    <div className="bg-purple-200"
      // className={` bg-[url('../public/18129294.webp')] bg-cover bg-center w-full h-screen  lg:grid lg:place-items-center relative `}
      // className="bg-linear-to-br from-pink-200 to-indigo-300"

    >
    
      <div className={`
      w-full h-full flex flex-col gap-12 justify-between
      sm:p-4
    
      xl:flex-row xl:gap-8
 
      `}>
        <Aside />
        <div className={`
          bg-white/60  w-full h-full pt-8 pb-20 flex flex-col rounded-lg p-4 gap-4 
        sm:gap-8 
        lg:h-full lg:flex lg:flex-col lg:justify-around lg:gap-4
        xl:pb-6 
          
          `}>
          <header className="flex justify-between items-center">
            <h1 className="font-bold text-4xl  lg:ml-12 md:after:w-40 md:after:h-1 md:after:bg-violet-500 md:after:inline-block md:after:ml-2 md:after:mb-2">
              Portfolio
            </h1>
            <span
              className={`
          bg-sky-500 py-2 px-4 rounded-full cursor-pointer ${
            openNav && "opacity-0 ease-in duration-500"
          }
          md:hidden
          `}
              onClick={() => setOpenNav(true)}
            >
              Ver perfil
            </span>
          </header>
          <main className="pb-10">
            {content === "resume" && <Resume />}
            {content === "about" && <About />}
            {content === "projects" && <Projects />}
            {content === "contact" && <Contact />}
          </main>
        </div>

        <Navbar />
      </div>
  
    </div>
  );
}

export default App;
