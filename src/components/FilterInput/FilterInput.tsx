import React, { InputHTMLAttributes } from "react";
import { StyledFilterInput } from "./styles";

export const FilterInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <StyledFilterInput {...props} />;
};
