import exportStyle from "../utils/ExportStyle"

const Text= ({element, style})=>{
  const className= element.type

  exportStyle(style, className)

  return (
     <div className={className}><p dangerouslySetInnerHTML={{__html:element.content}}></p></div>
  )
}
export default Text