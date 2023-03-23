import React, { InputHTMLAttributes } from "react";
import { StyledFilterInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const FilterInput = ({ type, placeholder, ...rest }: InputProps) => {
  return <StyledFilterInput type={type} placeholder={placeholder} {...rest} />;
};
