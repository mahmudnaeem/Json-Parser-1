import exportStyle from "../utils/ExportStyle"

const Button = ({ form, style }) => {
  const className = "button"

  exportStyle(style, className)

  return (
    <button className={className}>{form.submitButton.content}</button>
  );
};

export default Button;