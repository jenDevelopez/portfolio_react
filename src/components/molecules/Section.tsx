<<<<<<< HEAD
import { PropsSection } from "../../types"


function Section({children,title}: PropsSection) {
  return (
    <section className='w-full h-full mt-4 text-md flex flex-grow flex-col sm:w-full lg:mx-auto lg:w-3/4
    xl:w-[90%]
    '>
      <h2 className="text-2xl font-bold pb-4">{title}</h2>
=======
interface Props {
  children:JSX.Element | JSX.Element[];
  title:string;
  className?:string
}

function Section({children,title,className}: Props) {
  return (
    <section className={`w-full h-full ${className} mt-4 text-md flex flex-grow flex-col lg:w-11/12 lg:mx-auto xl:w-3/4`}>
      <h2 className="text-2xl font-bold my-2 text-red-700">{title}</h2>
<<<<<<< HEAD
>>>>>>> c458dec0fe1a19c8ea73b5a6579c2ade4f2086d7
=======
>>>>>>> c458dec0fe1a19c8ea73b5a6579c2ade4f2086d7
      {children}
    </section>
  )
}

export default Section