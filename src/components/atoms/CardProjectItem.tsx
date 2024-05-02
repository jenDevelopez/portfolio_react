import { FaLink,FaGithub } from 'react-icons/fa6'
interface Tag{
  name:string,
  class:string,
  icon:JSX.Element
}
interface Props {
  title:string,
  description:string,
  link?:string,
  github?:string,
  image:string, 
  className:string, 
  key:string
  tags:Tag[]
}

function CardProject({ title, description, link, github, image, tags, className }: Props) {
  return (
    <article className={`w-full h-80 bg-cover ${className} relative group border-2 border-gray-400 rounded-lg`} >
    <div className="w-full h-full bg-cover bg-center absolute top-0 group-hover:opacity-50 " style={{backgroundImage:`url(${image})`}}></div>
    <div className=" w-full h-full  opacity-0 hover:opacity-100 p-4 hover:z-10 absolute top-0 flex flex-col justify-center gap-4 ">
      <h2 className="font-bold text-lg">{title}</h2>
      <p>{description}</p>
      <ul className="w-10/12 flex flex-wrap justify-start gap-2 my-1">
        {tags.map((tag,index) => (
          <li key={index}>
            <span
              className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2`}
            >
              <span className={tag.class}>{tag.icon}</span>
              {tag.name}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        {github && (
          <a target='_blank' href={github}>
            <FaGithub className="size-5 text-black" />
          </a>
        )}
        {link && (
          <a target='_blank' href={link}>
            <FaLink className="size-5 text-blue-500" />
          </a>
        )}
      </div>
    </div>
  </article>
  );

}

export default CardProject;
