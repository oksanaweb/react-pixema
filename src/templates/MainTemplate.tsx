import { InputSearch, Modal, Nav } from "components";
import { useToggle, useWindowSize } from "hooks";
import React from "react";
import { Outlet } from "react-router-dom";
import {
  OutletBox,
  StyledBox,
  StyledHeaderGroup,
  StyledTemplate,
} from "./styles";

export const MainTemplate = () => {
  const [isOpen, toggleModal] = useToggle();
  const { width = 0 } = useWindowSize();
  return (
    <StyledTemplate>
      <StyledBox>
        <StyledHeaderGroup>
          <InputSearch toggleModal={toggleModal} />
        </StyledHeaderGroup>

        <OutletBox>
          {width > 900 && <Nav />}
          <Outlet />
        </OutletBox>

        <Modal isOpen={isOpen} toggleModal={toggleModal} />
      </StyledBox>
    </StyledTemplate>
  );
};
