import React from "react";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import nanoId from "nano-id";
import exportStyle from "../utils/ExportStyle";


const SubForm=({ form, style }) =>{
  const className= nanoId()
  exportStyle(style, className)
  
  return (
    <form 
    className={className}

    >
      {form.fields.items.map((item) => (
        <>
          <Label item={item}/>
          <Input item={item} form={form} style={form.fields.style}/>
        </>
      ))}
      <Button form={form} style={form.submitButton.style}/>
    </form>
  );
}

export default SubForm





