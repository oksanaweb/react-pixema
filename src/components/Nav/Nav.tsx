import React from "react";
import { ROUTE } from "router";

import { CustomLink } from "components";
import { StyledMenu, StyledNavBox, StyledTitle } from "./styles";
import { BookMarkIcon, FireIcon, HomeIcon, SettingIcon } from "assets";

export const Nav = () => {
  return (
    <StyledMenu>
      <StyledNavBox>
        <CustomLink to={ROUTE.Home}>
          <HomeIcon /> <StyledTitle>Home</StyledTitle>
        </CustomLink>
        <CustomLink to={ROUTE.Trends}>
          <BookMarkIcon />
          <StyledTitle>Trends</StyledTitle>
        </CustomLink>
        <CustomLink to={ROUTE.Favorites}>
          <FireIcon />
          <StyledTitle>Favorites</StyledTitle>
        </CustomLink>
        <CustomLink to={ROUTE.Settings}>
          <SettingIcon />
          <StyledTitle>Settings</StyledTitle>
        </CustomLink>
      </StyledNavBox>
    </StyledMenu>
  );
};
