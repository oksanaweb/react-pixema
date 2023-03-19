import { ArrowRightIcon, UserIcon } from "assets";
import React from "react";
import {
  StyledButton,
  StyledText,
  StyledUser,
  StyledUserIcon,
  UserTextContainer,
} from "./styles";

export const UserProfile = () => {
  return (
    <StyledUser>
      <StyledUserIcon>
        <UserIcon />
      </StyledUserIcon>

      <UserTextContainer>
        <StyledText>Sign In</StyledText>
      </UserTextContainer>

      <StyledButton>
        <ArrowRightIcon />
      </StyledButton>
    </StyledUser>
  );
};
