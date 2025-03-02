import Section from "../molecules/Section";
import Card from "../atoms/Card";
import { stack } from "../../data/data";
function About() {
  return (
    <Section title="Sobre mi">
      <div className="my-10 sm:my-10">
        <p className="mb-2 sm:text-xl">
          ¡Hola! Soy Jennifer, un desarrolladora web con una historia poco
          convencional. Mi viaje comenzó en el mundo de la atención al cliente,
          donde aprendí el valor de la comunicación clara, la resolución de
          problemas y la empatía. Sin embargo, mi pasión por la tecnología me
          llevó a explorar el fascinante universo del desarrollo web.
        </p>

        <p className="mb-2 sm:text-xl">
          Desde 2022, he estado inmerso en un aprendizaje constante, adquiriendo
          habilidades en HTML, CSS, JavaScript, React, etc. Cada proyecto ha sido una oportunidad para crecer y aplicar mis conocimientos, y estoy
          emocionada por seguir construyendo soluciones innovadoras.
        </p>

        <p className="mb-2 sm:text-xl">
          Mi objetivo es fusionar mi experiencia en atención al cliente con mis
          habilidades técnicas para crear experiencias web excepcionales.
          ¡Explora mi portafolio y descubre lo que puedo hacer por ti!
        </p>
        <h3 className="font-bold text-xl sm:text-2xl mb-2">¿Qué hago?</h3>
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
