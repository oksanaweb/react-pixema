import { ArrowRightIcon, UserIcon } from "assets";
import React from "react";
import { ROUTE } from "router";
import { useAppDispatch, useAppSelector } from "store";
import { getUserInfo } from "store/selectors";
import {
  ArrowButton,
  LogOut,
  StyledLink,
  StyledMenu,
  StyledText,
  StyledTitle,
  StyledUser,
  StyledUserIcon,
  UserNav,
  UserTitle,
  Wrap,
} from "./styles";
import { useToggle } from "hooks";

export const UserProfile = () => {
  const { isAuth, email } = useAppSelector(getUserInfo);
  const [toggle, setToggle] = useToggle(false);

  return (
    <StyledUser>
      <StyledUserIcon>
        <UserIcon />
      </StyledUserIcon>

      <UserNav>
        {isAuth ? (
          <Wrap>
            <StyledTitle>
              <UserTitle>{email}</UserTitle>
            </StyledTitle>

            <ArrowButton onClick={setToggle}>
              <ArrowRightIcon />
            </ArrowButton>
          </Wrap>
        ) : (
          <Wrap>
            <StyledTitle>
              <StyledLink to={ROUTE.Sign_in}>
                <StyledText>Sign in</StyledText>
              </StyledLink>
            </StyledTitle>

            <ArrowButton onClick={setToggle}>
              <ArrowRightIcon />
            </ArrowButton>
          </Wrap>
        )}
        {toggle && (
          <StyledMenu>
            {isAuth ? (
              <>
                <StyledLink to={ROUTE.Settings}>Edit</StyledLink>
                <LogOut type="button">Log out</LogOut>
              </> //add log out in user slice
            ) : (
              <>
                <StyledLink to={ROUTE.Sign_up}>Sign up</StyledLink>
              </>
            )}
          </StyledMenu>
        )}
      </UserNav>
    </StyledUser>
  );
};
