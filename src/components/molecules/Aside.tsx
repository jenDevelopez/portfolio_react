import useMyContext from "../../hooks/useMyContext"
import Info from "./Info";

function Aside() {
  const { openNav } = useMyContext();
  return (
    <aside className={`
    bg-purple-100 rounded-xl fixed top-[4.5rem]
    ${openNav ? 'right-4' : '-right-full'}
    ease-linear duration-300 z-[99]
    md:static 
    xl:h-fit xl:mt-10 xl:w-1/4
    
    `}>
    <Info />
  </aside>
  )
}

export default Aside