import React from "react";
import { LogoWrap, StyledAuth, StyledCopyright, StyledOutlet } from "./styles";
import { MainLogo } from "assets";
import { ROUTE } from "router";
import { Outlet } from "react-router-dom";

export const AuthTemplate = () => {
  return (
    <StyledAuth>
      <LogoWrap to={ROUTE.Home}>
        <MainLogo width={158} />
      </LogoWrap>
      <StyledOutlet>
        <Outlet />
        <StyledCopyright>© All Rights Reserved</StyledCopyright>{" "}
      </StyledOutlet>
    </StyledAuth>
  );
};
