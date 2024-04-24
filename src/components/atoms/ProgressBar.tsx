
function ProgressBar({width}:{width:string}) {
  return (
    

<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div className="bg-violet-600 h-2.5 rounded-full" style={{width}}></div>
</div>

  )
}

export default ProgressBar
