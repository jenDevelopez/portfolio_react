import { PropsResumeItem } from "../../types";


function ResumeItem({ id, fecha, titulo, ubicacion, puesto, empresa, link }: PropsResumeItem) {
  return (
<<<<<<< HEAD
    <article
      key={`formacion.${id}`}
      className={`${id % 2 === 0 ? 'bg-purple-200' : 'bg-teal-100'}
        p-2 rounded-lg before:size-3 before:rounded-full before:block before:bg-purple-400 before:relative before:top-12 before:-left-6 
      `}
=======
    <article 
    className={`${id % 2 === 0 ? 'bg-purple-200' : 'bg-teal-100'}
    p-2 rounded-lg before:size-3 before:rounded-full before:block before:bg-purple-400 before:relative before:top-12 before:-left-6 
    `}
>>>>>>> c458dec0fe1a19c8ea73b5a6579c2ade4f2086d7
    >
      <a target="_blank" href={`${link ? link : ''}`} >
        <span>{fecha}</span>
        {titulo && <strong className="font-normal block">{titulo}</strong>}
        {ubicacion && <p>{ubicacion}</p>}
        {puesto && <h4>{puesto}</h4>}
        {empresa && link && <strong className="font-bold">{empresa}</strong>}
      </a>
    </article>
  );
}

export default ResumeItem;