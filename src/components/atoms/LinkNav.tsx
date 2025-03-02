
import useMyContext from '../../hooks/useMyContext'
import { PropsLinkNav } from '../../types';


function LinkNav({name,icon}: PropsLinkNav) {
  const {setContent,content} = useMyContext();

  return (
    <button className={`size-12 grid place-items-center rounded-md ${content === name && 'bg-blue-500 '}`} onClick={() => setContent(name)}>
        <span className={`text-black text-2xl ${content === name && 'text-white'} `} >
          {icon}
        </span>
    </button>
  )
}

export default LinkNav