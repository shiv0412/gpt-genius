"use client";
import styled from "styled-components";

interface InputFieldProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

const CustomInputField = styled.input`
  padding: 8px;
  border: 2px solid #d6dbdf;
  border-radius: 5px;
`;

const InputField = ({ value, placeholder, onChange }: InputFieldProps) => {
  return (
    <>
      <CustomInputField
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default InputField;
