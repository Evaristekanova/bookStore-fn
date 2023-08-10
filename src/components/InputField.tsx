import React from "react";
interface InputFieldProps {
  placeholder: string;
  type: string;
  id: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  type,
  id,
  className,
  onChange,
}) => {
  return (
    <input
      type={type}
      id={id}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default InputField;
