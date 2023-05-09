import exportStyle from "../utils/ExportStyle"

const Title= ({element, style})=>{
  const Heading = element.level
  const className = element.level

  // console.log(style);

  exportStyle(style, className)
  return(
    <Heading 
    // style={element.style} 
    className={className}>
                <div dangerouslySetInnerHTML={{__html:element.content}}></div>
              </Heading>
  )
}

export default Title