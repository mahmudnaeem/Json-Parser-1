import generateStyles from "./GenerateStyle";

let styles = document.getElementById("head.styles")

const exportStyle= ( style, className) => {
      const convertedStyles = generateStyles(style);
      const styleDeclaration = `.${className} { ${convertedStyles} }`;
      styles.appendChild(document.createTextNode(styleDeclaration))
}


export default exportStyle