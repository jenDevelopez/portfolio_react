import Section from "../molecules/Section";
import Card from "../atoms/Card";
import { stack } from "../../data/data";
function About() {
  return (
    <Section title="Sobre mí">
      <div className="my-2">
        <p className="mb-8 sm:text-xl">
          Soy una desarrolladora que ha estado formándose tanto en el lado cliente como en el lado servidor. He estado aprendiendo distintas tecnologias desde el 2022. Y tomando experiencia en distintos proyectos
        </p>
        {/* <p className="mb-2 sm:text-xl">
          De 2022 a 2024 he estado centrandome en el lado Frontend, profundizando en javascript y React Js.
          Desde 2024 he estado ampliando conocimientos y experiencia en el lado del servidor con Php, mysql y node
        </p> */}
        <h3 className="font-bold text-xl sm:text-2xl mb-2 text-red-700">¿Qué hago?</h3>
        <div className="md:flex md:justify-between md:items-center md:gap-4">
          {stack.map(({ title, content }) => (
            <Card key={title} title={title} content={content} />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default About;
