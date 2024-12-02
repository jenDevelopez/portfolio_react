interface Props {
  children:JSX.Element | JSX.Element[];
  title:string;
  className?:string
}

function Section({children,title,className}: Props) {
  return (
    <section className={`w-full h-full ${className} mt-4 text-md flex flex-grow flex-col lg:w-11/12 lg:mx-auto xl:w-3/4`}>
      <h2 className="text-2xl font-bold my-2 text-red-700">{title}</h2>
      {children}
    </section>
  )
}

export default Section