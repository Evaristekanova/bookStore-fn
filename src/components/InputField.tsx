import React from "react";
interface InputFieldProps {
  placeholder: string;
  type: string;
  id: string;
  className?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  type,
  id,
  className,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      id={id}
      className={className}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default InputField;
