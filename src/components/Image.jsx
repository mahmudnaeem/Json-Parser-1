import exportStyle from "../utils/ExportStyle"

const Image = ({element, style}) =>{

  const className= element.type

  exportStyle(style, className)
  return(
     <img  className={className} src={element.attr.src} alt={element.alt} />
  )
}

export default Image