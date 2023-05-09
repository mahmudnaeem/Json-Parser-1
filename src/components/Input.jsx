import exportStyle from "../utils/ExportStyle"

const Input = ({item, form, style}) => {
  const className = item.name

  exportStyle( style, className,)

  return (
  
      <input type="text" className={className} id={item.id} name={item.name} placeholder={item.attr.placeholder} />
   )
 }

 export default Input