import { InputSearch, Modal, Nav } from "components";
import { useToggle, useWindowSize } from "hooks";
import React from "react";
import { Outlet } from "react-router-dom";
import { StyledNav, StyledTemplate, Wrap } from "./styles";
import { useAppDispatch, useAppSelector } from "store";

export const MainTemplate = () => {
  const [isOpen, toggleModal] = useToggle();
  const { width = 0 } = useWindowSize();

  const dispatch = useAppDispatch();

  return (
    <StyledTemplate>
      <InputSearch toggleModal={toggleModal} />

      <Wrap>
        {width > 1380 && (
          <StyledNav>
            <Nav />
          </StyledNav>
        )}
        <Outlet />
      </Wrap>

      <Modal isOpen={isOpen} toggleModal={toggleModal} />
    </StyledTemplate>
  );
};
