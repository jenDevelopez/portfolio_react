interface Props{
  id:number,
  fecha:string,
  titulo?:string,
  ubicacion?:string,
  puesto?:string,
  empresa?:string
}
function ResumeItem({id,fecha,titulo,ubicacion,puesto,empresa}: Props) {
  return (
    <article 
    className={`${id % 2 === 0 ? 'bg-purple-200' : 'bg-teal-100'}
    p-2 rounded-lg before:size-3 before:rounded-full before:block before:bg-purple-400 before:relative before:top-12 before:-left-6 
    `}
    >
      <span>{fecha}</span>
      {titulo && (
        <strong className="font-normal block">{titulo}</strong>
      )}
      {ubicacion && (
        <p>{ubicacion}</p>
      )}
      {puesto && (
        <h4>{puesto}</h4>
      )}
      {empresa && (
        <p>{empresa}</p>
      )}
    </article>
  );
}

export default ResumeItem;
