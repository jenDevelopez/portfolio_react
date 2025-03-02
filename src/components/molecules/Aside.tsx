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
    lg:h-fit lg:mt-10 lg:w-full lg:mx-auto
    xl:w-1/4 xl:mt-32
    2xl:mt-20
    `}>
    <Info />
  </aside>
  )
}

export default Aside