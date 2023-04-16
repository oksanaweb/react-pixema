import React from "react";
import { StyledMessage, StyledPicture, Title } from "./styles";
import { NotResults } from "assets";

export const NotFoundMessage = () => {
  return (
    <StyledMessage>
      <StyledPicture src={NotResults} />
      <Title>Oops, nothing found</Title>
    </StyledMessage>
  );
};
