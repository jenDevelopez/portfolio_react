import { FaLocationDot } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { IoIosMailOpen } from "react-icons/io";
import ButtonCV from "../atoms/ButtonCV";
import { CgClose } from "react-icons/cg";
import useMyContext from "../../hooks/useMyContext";
import InfoDataItem from "../atoms/InfoDataItem";
function Info() {
  const { setOpenNav } = useMyContext();
  const dataInfoItems = [
   
    {
      id: 2,
      text: "jendevelopez@hotmail.com",
      icon: <IoIosMailOpen />,
    },
    {
      id: 3,
      text: "Rubi,Barcelona",
      icon: <FaLocationDot />,
    },
  ];
  return (
    <div
      className="w-full h-[50vh] flex flex-col items-center p-4 relative md:flex-row md:items-start md:justify-center md:gap-4 md:h-fit lg:flex-col 
    lg:items-center lg:h-fit lg:justify-self-center"
    >
      {/* Imagen */}
      <div className="md:flex md:flex-col md:gap-2">
        <div className=" size-36  relative -top-10 left-5 md:static md:self-center lg:relative lg:-top-24  lg:left-1 lg:size-44 ">
          <img
            className="rounded-xl"
            src="https://avatars.githubusercontent.com/u/123985275?v=4"
          />
        </div>
        <div className="lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-2 lg:-mt-10">
          <h2 className="text-xl md:text-xl">Jennifer Lopez</h2>
          <span className="bg-blue-200 text-xs w-fit rounded-full py-1 px-2 mx-auto md:text-sm">
            FullStack Developer
          </span>
          <div className="flex justify-center gap-3 mt-2">
            <a target="_blank" className="text-black md:text-xl" href="https://github.com/jenDevelopez">
              <ImGithub />
            </a>

            <a target="_blank" className="text-blue-700 md:text-xl" href="https://www.linkedin.com/in/jendevelopez/">
              <FaLinkedin />
            </a>
            <a target="_blank" className="text-green-600 md:text-xl" href="https://wa.me/34652176302" >
              <SiWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Info */}

      <div className="flex flex-col gap-2 justify-center md:flex-row">
        <div className="text-sm mt-4 flex flex-col gap-4  px-2 py-4 bg-violet-200 rounded-2xl">
          {dataInfoItems.map(({ text, icon, id }) => (
            <InfoDataItem key={id} text={text} icon={icon} />
          ))}
        </div>
      </div>

      <ButtonCV />
      <span
        onClick={() => setOpenNav(false)}
        className="absolute top-4 right-4 md:hidden"
      >
        <CgClose />
      </span>
    </div>
  );
}

export default Info;
