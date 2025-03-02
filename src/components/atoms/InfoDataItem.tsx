import { PropsInfoDataItem } from "../../types"

function InfoDataItem({ text, icon,linkType }: PropsInfoDataItem) {
  return (
    <div className="flex items-center justify-start gap-2 md:text-lg lg:text-base">
      <span className="text-lg p-2 bg-sky-100 rounded-lg ">
        {icon}
      </span>
      {!linkType ? (
        <p>{text}</p>
      ): (
        <a href={`${linkType}${text}`}>{text}</a>
      )}
    </div>
  )
}

export default InfoDataItem