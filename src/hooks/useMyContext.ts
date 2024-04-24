import { useContext } from "react";
import { MyContext } from "../context/myContext";


function useMyContext() {
  const {content,setContent,openNav,setOpenNav} = useContext(MyContext)

  return (
    {content,setContent,openNav,setOpenNav}
  )
}

export default useMyContext