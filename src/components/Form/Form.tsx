import React from "react";

interface FormProps {
  name: string;
}

export const Form = ({ name }: FormProps) => {
  return <div>Title: {name}</div>;
};
