import React from "react";
import  elements  from "../data.json";
import Title from "../components/Title";
import Text from "../components/Text";
import Image from "../components/Image";
import SubForm from "../components/SubForm";

const RenderWeb = () =>{

  return (
  
  <div>
    {elements.map((element, index)=>{
      switch (element.type){
        case "heading":
          return (
            <Title key={index} element={element} style={element.style} />
          );
        case "text": 
            return (  
               <Text key={index} element={element} style={element.style}/>
            );
        case "image":
          return (
           <Image key={index} element={element} style={element.style} />
          );
        case "subscription": 
            return (
              <SubForm key={index} form={element.form} style={element.form.style}/>
            );
        default:
          return null
       }  
     }
    )}
  </div>
  )
}

export default RenderWeb