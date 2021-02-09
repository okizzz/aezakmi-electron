import React, { FC } from "react";
import ButtonComponent from "./styles";

interface IProps {
  text?: string;
  icon?: string;
  variant?: "outlined" | "default";
  onClick?: () => void;
}

const Button: FC<IProps> = ({
  text,
  icon,
  variant = "default",
  onClick,
}: IProps) => {
  return (
    <ButtonComponent
      onClick={onClick}
      icon={icon}
      text={text}
      variant={variant}
    >
      {text && text}
      {icon && <img src={icon} alt="" />}
    </ButtonComponent>
  );
};

Button.defaultProps = { icon: null, variant: "default", text: null };

export default Button;
