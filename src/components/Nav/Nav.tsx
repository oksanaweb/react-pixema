import React from "react";
import { Link, Route } from "react-router-dom";
import { BookMark, FireIcon, HomeIcon, Setting } from "../../assets";
import { ROUTE } from "../../router/routes";
import { CustomLink } from "../CustomLink/CustomLink";
import { StyledIcon, StyledLink, StyledNavBox } from "./styles";

export const Nav = () => {
  return (
    <StyledNavBox>
      <StyledLink>
        <StyledIcon>
          <HomeIcon />
        </StyledIcon>
        <CustomLink to={ROUTE.Home}>Home</CustomLink>
      </StyledLink>
      <StyledLink>
        <StyledIcon>
          <FireIcon />
        </StyledIcon>
        <CustomLink to={ROUTE.Trends}>Trends</CustomLink>
      </StyledLink>
      <StyledLink>
        <StyledIcon>
          <BookMark />
        </StyledIcon>
        <CustomLink to={ROUTE.Favorites}>Favorites</CustomLink>
      </StyledLink>
      <StyledLink>
        <StyledIcon>
          <Setting />
        </StyledIcon>
        <CustomLink to={ROUTE.Settings}>Settings</CustomLink>
      </StyledLink>
    </StyledNavBox>
  );
};
