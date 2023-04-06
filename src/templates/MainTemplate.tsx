import { BasicSwitch, InputSearch, Modal, Nav } from "components";
import { useToggle, useWindowSize } from "hooks";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { StyledOutlet } from "./AuthTemplate/styles";
import { Box, StyledHeaderGroup, StyledNav, StyledTemplate } from "./styles";
import { getTheme } from "store/selectors";
import { useAppDispatch, useAppSelector } from "store";
import { toggleMode } from "store/features";

export const MainTemplate = () => {
  const [isOpen, toggleModal] = useToggle();
  const { width = 0 } = useWindowSize();
  const { theme } = useAppSelector(getTheme);
  const dispatch = useAppDispatch();

  const toggleTheme = () => {
    dispatch(toggleMode());
  };

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return (
    <StyledTemplate>
      <StyledHeaderGroup>
        <InputSearch toggleModal={toggleModal} />
      </StyledHeaderGroup>

      <Box>
        {width > 1100 && (
          <StyledNav>
            <Nav />
          </StyledNav>
        )}
        <StyledOutlet>
          <Outlet />
          <BasicSwitch onClick={toggleTheme} />
        </StyledOutlet>
      </Box>

      <Modal isOpen={isOpen} toggleModal={toggleModal} />
    </StyledTemplate>
  );
};
