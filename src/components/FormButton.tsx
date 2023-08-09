interface FormButtonProps {
  text: string;
  className: string;
}

const FormButton: React.FC<FormButtonProps> = ({ className, text }) => {
  return <button className={className}>{text}</button>;
};

export default FormButton;
