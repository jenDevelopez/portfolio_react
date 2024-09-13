import { FaHtml5, FaCss3Alt, FaWordpressSimple, FaPhp } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { GiBearFace } from "react-icons/gi";
import { DiMysql } from "react-icons/di";
import CardProject from "../atoms/CardProjectItem";
import Section from "../molecules/Section";
function Projects() {
  const TAGS = {
    NEXT: {
      name: "Next.js",
      class: "bg-black text-white",
      icon: <TbBrandNextjs />,
    },
    TAILWIND: {
      name: "Tailwind CSS",
      class: "bg-[#003159] text-white",
      icon: <SiTailwindcss />,
    },
    REACT: {
      name: "React JS",
      class: "bg-sky-500 text-white",
      icon: <FaReact />,
    },
    ZUSTAND: {
      name: "Zustand",
      class: "bg-yellow-500 text-gray-900",
      icon: <GiBearFace />,
    },
    FIREBASE: {
      name: "Firebase",
      class: "bg-blue-500 text-white",
      icon: <IoLogoFirebase />,
    },
    HTML: {
      name: "HTML5",
      class: "bg-orange-500 text-white",
      icon: <FaHtml5 />,
    },
    CSS: {
      name: "CSS3",
      class: "bg-sky-700 text-white",
      icon: <FaCss3Alt />,
    },
    WORDPRESS: {
      name: "Wordpress",
      class: "bg-blue-700 text-white",
      icon: <FaWordpressSimple />,
    },
    PHP: {
      name: "PHP",
      class: "bg-purple-700 text-white",
      icon: <FaPhp />,
    },
    MYSQL: {
      name: "MySQL",
      class: "bg-white text-blue-700",
      icon: <DiMysql />
    }
  };
  const proyectos = [
    {
      title: "Anima Animalis",
      description: "Pagina dinamica con CMS a una clinica veterinaria",
      link: "https://animaanimalis.es/",
      image: "/anima-animalis.png",
      tags: [TAGS.HTML, TAGS.CSS, TAGS.WORDPRESS],
      className: "text-gray-700",
      backgroundImage: "",
      key: "prj1",
    },
    {
      title: "Star Wars Starships",
      description:
        "Pagina de naves de Star Wars, con su informacion, pilotos y películas en la que aparecen",
      link: "https://star-wars-aplication.netlify.app",
      github: "https://github.com/jenDevelopez/star-wars/",
      image: "/star_wars.png",
      tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.ZUSTAND, TAGS.FIREBASE],
      className: "text-white",
      backgroundImage: "",
      key: "prj2",
    }, {
      title: "Crud News",
      description: "Pagina de noticias implementando CRUD en base de datos",
      link: "",
      image: "/next-crud.png",
      tags: [TAGS.HTML, TAGS.CSS, TAGS.PHP, TAGS.MYSQL],
      className: "text-black",
      backgroundImage: "",
      key: "prj3",
    },
   
  ];
  return (
    <Section title="Proyectos">
<div className="mt-4 grid grid-cols-auto-fill-300  gap-4 lg:justify-center md:p-8 lg:pb-24 bg-blue-100 rounded-lg" >
      {proyectos.map(
        ({ title, description, link, github, image, tags, className, key }) => (
          <div key={`project-id-${key}`}>
            <CardProject
              title={title}
              description={description}
              link={link}
              github={github}
              tags={tags}
              image={image}
              className={className}
              key={key}
            />
          </div>
        )
      )}
    </div>
    
    </Section>
    
  );
}

export default Projects;
