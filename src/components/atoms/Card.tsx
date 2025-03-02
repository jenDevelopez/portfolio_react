import {PropsCard} from '../../types'

function Card({title,content,children}:PropsCard) {
  return (
    <article className=" flex-1  rounded-xl mb-2 p-2 min-h-40 md:h-60 ">
    <h3 className="font-semibold text-lg sm:text-xl mb-2">{title}</h3>
    <p className="text-lg sm:text-xl">{content}</p>
    {children}
   
  </article>
  )
}

export default Card