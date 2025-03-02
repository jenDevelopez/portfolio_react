import { FaGraduationCap, FaBriefcase } from "react-icons/fa6";
import { HiCode } from "react-icons/hi";
import Section from "../molecules/Section";
import ResumeItem from "../atoms/ResumeItem";
import { educacion, skills } from "../../data/data";
import { experciencia } from "../../data/data";
import ProgressBar from "../atoms/ProgressBar";
// import { linkSync } from "fs";
function Resume() {
  return (
    <Section title="Experiencia">
<<<<<<< HEAD
      <div className="pb-10" >
        <div className="mt-4 flex flex-col gap-4 md:flex-row md:justify-between">
          <div className="md:w-1/2">
            <h3 className="font-semibold text-xl my-2 md:text-2xl flex justify-start gap-2 items-center">
              <span>
                <FaGraduationCap />
              </span>
              Educacion
            </h3>
            <div className="border-l-4 border-purple-400 pl-2 flex flex-col gap-4">
              {educacion.map(({ id, fecha, titulo, ubicacion,link }) => (
                <ResumeItem
                  id={id}
                  fecha={fecha}
                  titulo={titulo}
                  ubicacion={ubicacion}
                  link={link}
                />
              ))}
            </div>
=======
      <div>
      <div className="mt-4 flex flex-col gap-4 md:flex-row md:justify-between">
        <div>
          <h3 className="font-semibold text-xl my-2 md:text-2xl flex justify-start gap-2 items-center">
            <span>
              <FaGraduationCap />
            </span>
            Educacion
          </h3>
          <div className="border-l-4 border-purple-400 pl-2 flex flex-col gap-4">
            {educacion.map(({ id, fecha, titulo, ubicacion }) => (
              <ResumeItem
                key={id}
                id={id}
                fecha={fecha}
                titulo={titulo}
                ubicacion={ubicacion}
              />
            ))}
>>>>>>> c458dec0fe1a19c8ea73b5a6579c2ade4f2086d7
          </div>
          <div className="md:w-1/2">
            <h3 className="font-semibold text-xl my-2 md:text-2xl flex justify-start gap-2 items-center">
              <span>
                <FaBriefcase />
              </span>
              Experiencia
            </h3>
            <div className="border-l-4 border-purple-400 pl-2 flex flex-col gap-4">
              {experciencia.map(({ id, fecha, puesto, empresa,link }) => (
                <ResumeItem
                  id={id}
                  fecha={fecha}
                  titulo={puesto}
                  ubicacion={empresa}
                  link={link}
                />
              ))}
           
            </div>
          </div>
        
        </div>
        <div>
<<<<<<< HEAD
            <h3 className="font-semibold text-xl my-2 md:text-2xl flex justify-start gap-2 items-center">
              <span>
                <HiCode />
              </span>
              Skills
            </h3>
            <div className="">
              {skills.map(({ name, progress }) => (
                <div>
                  <p>{name}</p>
                  <ProgressBar width={progress} />
                </div>
              ))}
            </div>
=======
          <h3 className="font-semibold text-xl my-2 md:text-2xl flex justify-start gap-2 items-center">
            <span>
              <FaBriefcase />
            </span>
            Experiencia
          </h3>
          <div className="border-l-4 border-purple-400 pl-2 flex flex-col gap-4">
            {experciencia.map(({ id, fecha, puesto, empresa }) => (
              <ResumeItem
                key={id}
                id={id}
                fecha={fecha}
                titulo={puesto}
                ubicacion={empresa}
              />
            ))}
          </div>
        </div>
      
      </div>
      <div>
          <h3 className="font-semibold text-xl my-2 md:text-2xl flex justify-start gap-2 items-center">
            <span>
              <HiCode />
            </span>
            Skills
          </h3>
          <div className="">
            {skills.map(({ name, progress }) => (
              <div key={`skill-${name}`}>
                <p>{name}</p>
                <ProgressBar width={progress} />
              </div>
            ))}
          </div>
>>>>>>> c458dec0fe1a19c8ea73b5a6579c2ade4f2086d7
        </div>
      </div>

     
    </Section>
  );
}
export default Resume;





