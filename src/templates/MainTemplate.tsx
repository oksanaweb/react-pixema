import { MainLogo } from "assets";
import { Header, InputSearch, Nav, UserProfile } from "components";
import React from "react";
import { Outlet } from "react-router-dom";
import {
  StyledBox,
  StyledHeaderGroup,
  StyledLogo,
  StyledNavBox,
  StyledTemplate,
} from "./styles";

export const MainTemplate = () => {
  return (
    <StyledTemplate>
      <StyledNavBox>
        <StyledLogo>
          <MainLogo />
        </StyledLogo>
        <Nav />
      </StyledNavBox>

      <StyledBox>
        <StyledHeaderGroup>
          <InputSearch />
          <UserProfile />
        </StyledHeaderGroup>

        <Outlet />
      </StyledBox>
    </StyledTemplate>
  );
};
