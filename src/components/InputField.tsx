import React from 'react'
interface InputFieldProps { 
    placeholder: string;
    type: string;
    id: string;
    className?: string;
} 
const InputField: React.FC<InputFieldProps> = ({ placeholder,type, id, className }) => {
  return (
      <input type={type}
          id={id}
          className={className}
            placeholder={placeholder}
      />
  )
}

export default InputField