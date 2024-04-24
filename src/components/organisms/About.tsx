import Section from "../molecules/Section";
import Card from "../atoms/Card";
import { stack } from "../../data/data";
function About() {
  
  return (
    <Section title="Sobre mi">
      <div className="my-10">
         <p className="mb-2 sm:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        delectus beatae ea debitis corrupti, dignissimos ex, libero illo minima
        pariatur nesciunt quidem fugiat obcaecati !
      </p>
      <p className="mb-2 sm:text-xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas dolores
        numquam quae repellat at eveniet quia facere excepturi facilis
        repellendus. Iure, blanditiis vitae deserunt ut quaerat ducimus
        aspernatur perferendis? Beatae!
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
