import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  children: ReactNode;
}

export const Button = ({ type, children }: ButtonProps) => {
  return <StyledButton type={type} children={children} />;
};
