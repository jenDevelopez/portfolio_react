import useMyContext from "../../hooks/useMyContext"
import Info from "./Info";

function Aside() {
  const { openNav } = useMyContext();
  return (
    <aside className={` h-full
    bg-white/90 rounded-xl fixed 
    ${openNav ? 'right-4' : '-right-full'}
    ease-linear duration-300 z-[99]
    md:static 
<<<<<<< HEAD
<<<<<<< HEAD
    lg:h-fit lg:mt-10 lg:w-full lg:mx-auto
    xl:w-1/4 xl:mt-32
    2xl:mt-20
=======
=======
>>>>>>> c458dec0fe1a19c8ea73b5a6579c2ade4f2086d7
    xl:h-fit xl:mt-10 xl:w-1/4
    
>>>>>>> c458dec0fe1a19c8ea73b5a6579c2ade4f2086d7
    `}>
    <Info />
  </aside>
  )
}

export default Aside