import { FaHtml5, FaCss3Alt, FaWordpressSimple, FaPhp } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { GiBearFace } from "react-icons/gi";
import { DiMysql } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { SiJquery } from "react-icons/si";

// import CardProject from "../atoms/CardProjectItem";
import Section from "../molecules/Section";
// import { Carousel } from "flowbite-react";
import Carousel from "../atoms/Carousel";

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
    },
    JAVSCRIPT: {
      name: "Javascript",
      class: "bg-yellow-300 text-white-700",
      icon: <SiJavascript />
    },
    JQUERY: {
      name: "jquery",
      class: "bg-white text-blue-800",
      icon: <SiJquery />
    }
  };
  const proyectos = [
    {
      title: "Anima Animalis",
      description: "Pagina dinamica con CMS a una clinica veterinaria",
      link: "https://animaanimalis.es/",
      image: "/anima-animalis.webp",
      tags: [TAGS.HTML, TAGS.CSS, TAGS.WORDPRESS],
      className: "text-gray-700 left-0",
      backgroundImage: "",
      key: "prj1",
    },
    {
      title: "Star Wars Starships",
      description:
        "Pagina de naves de Star Wars, con su informacion, pilotos y películas en la que aparecen",
      link: "https://star-wars-aplication.netlify.app",
      github: "https://github.com/jenDevelopez/star-wars/",
      image: "/star_wars.webp",
      tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.ZUSTAND, TAGS.FIREBASE],
      className: "text-white left-0",
      backgroundImage: "",
      key: "prj2",
    },
    {
      title: "Lleo XIII",
      description:
        "Página de la escuela Lleo XIII en Barcelona",
      link: "https://lleoxiii.com",
      image: "/lleoxiii.webp",
      tags: [TAGS.HTML, TAGS.CSS,TAGS.JAVSCRIPT,TAGS.WORDPRESS,TAGS.JQUERY],
      className: "text-white left-0",
      backgroundImage: "",
      key: "prj3",
    }

  ];


  return (
    <Section title="Proyectos">
      <Carousel listProjects={proyectos} />
    </Section>
  )
}

export default Projects;
