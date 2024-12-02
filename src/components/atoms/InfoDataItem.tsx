interface Props {
  text: string
  icon: JSX.Element
}
function InfoDataItem({ text, icon }: Props) {
  return (
    <div className="flex items-center justify-start gap-2 md:text-lg lg:text-base">
      <span className="text-lg p-2 bg-slate-200 rounded-lg ">
        {icon}
      </span>
      <p className="text-white">{text}</p>
    </div>
  )
}

export default InfoDataItem