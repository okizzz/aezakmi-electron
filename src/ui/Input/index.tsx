import React, { FC } from "react";
import InputComponent from "./styles";

interface IProps {
  type?: "text" | "password" | "email";
  name: string;
  title: string;
  value: string;
  onChange: (e: any) => void;
}

const Input: FC<IProps> = ({
  type = "text",
  name,
  value,
  title,
  onChange,
}: IProps) => {
  return (
    <InputComponent>
      <input
        onChange={onChange}
        type={type}
        autoComplete={name}
        name={name}
        value={value}
      />
      <p>{title}</p>
    </InputComponent>
  );
};

Input.defaultProps = { type: "text" };

export default Input;
