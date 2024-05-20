import { FaUserTie } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";

import { TiContacts } from "react-icons/ti";

import LinkNav from "../atoms/LinkNav";



function Navbar() {

  const navButtons = [
    {
      name:'about',
      icon:<FaUserTie />
    },
    {
      name:'resume',
      icon:<IoDocumentTextOutline />
    },
    {
      name:'projects',
      icon:<FaBriefcase />
    },
    {
      name:'contact',
      icon: <TiContacts />
    }
  ]

  return (
    <nav className="
     w-full p-4 bg-white rounded-xl flex justify-around items-center shadow-md
   
    md:left-10 
    xl:w-fit xl:flex-col xl:static xl:h-1/2 

    ">
      {navButtons.map(({name,icon}) => (
        <LinkNav key={`btn-${name}`} name={name} icon={icon}/>
      ))}
    </nav>
  );
}

export default Navbar;
