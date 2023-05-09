import kebabCase from "lodash.kebabcase"

const generateStyles=(styleObj)=>{
      let cssDeclarations = ""

      Object.keys(styleObj).forEach((property) => {
        const kebabCaseProperty = kebabCase(property);
        const value = styleObj[property];

        cssDeclarations += `${kebabCaseProperty}: ${value};\n`;
      });
  
      return cssDeclarations;
    }
    


export default generateStyles

