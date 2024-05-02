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
    <div
      className={` bg-[url('../public/18129294.webp')] bg-cover bg-center w-full h-screen lg:grid lg:place-items-center relative `}
    >
      <div
        className="
    flex flex-col justify-between items-center gap-10 w-full  p-4  
    md:justify-evenly
    lg:flex-row lg:justify-between lg:items-start lg:gap-20 lg:mt-36 lg:w-[95%] 
    "
      >
        <Aside />
        <div className="bg-white/60 w-full rounded-lg p-4 gap-4 lg:h-full lg:flex lg:flex-col lg:justify-around lg:gap-4">
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
          <main>
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
