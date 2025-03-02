import { PropsInfoDataItem } from "../../types"

function InfoDataItem({ text, icon,linkType }: PropsInfoDataItem) {
  return (
    <div className="flex items-center justify-start gap-2 md:text-lg lg:text-base">
      <span className="text-lg p-2 bg-slate-200 rounded-lg ">
        {icon}
      </span>
<<<<<<< HEAD
      {!linkType ? (
        <p>{text}</p>
      ): (
        <a href={`${linkType}${text}`}>{text}</a>
      )}
=======
      <p className="text-white">{text}</p>
>>>>>>> c458dec0fe1a19c8ea73b5a6579c2ade4f2086d7
    </div>
  )
}

export default InfoDataItem