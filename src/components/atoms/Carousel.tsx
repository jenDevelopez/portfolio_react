import { useState } from "react";
import { ListProjectsType } from "../../types";
import CardProject from "./CardProjectItem";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

function Carousel({ listProjects }: { listProjects: ListProjectsType }) {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? listProjects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((nextIndex) =>
      nextIndex === listProjects.length - 1 ? 0 : nextIndex + 1
    );
  };

  return (
    <div
      className="relative"
     >
      <div className="absolute w-full  flex justify-between items-center top-1/2">
        <button onClick={handlePrev} >
          <GrPrevious className="size-8"/>
        </button>
        <button onClick={handleNext}  >
          <GrNext className="size-8"  />
        </button>
      </div>
      <div className="   h-[65vh] w-11/12 mx-auto">
        <CardProject
          title={listProjects[index].title}
          description={listProjects[index].description}
          link={listProjects[index].link}
          github={listProjects[index].github}
          tags={listProjects[index].tags}
          image={listProjects[index].image}
          className={listProjects[index].className}
          key={listProjects[index].key}
        />
      </div>
    </div>
  );
}

export default Carousel;
