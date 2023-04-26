import { InputSearch, Modal, Nav } from "components";
import { useToggle, useWindowSize } from "hooks";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { StyledNav, StyledTemplate, Wrap } from "./styles";
import { useAppDispatch } from "store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { setAuth, unsetAuth } from "store/features";

export const MainTemplate = () => {
  const [isOpen, toggleModal] = useToggle();
  const { width = 0 } = useWindowSize();
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setAuth(user));
      } else {
        dispatch(unsetAuth());
      }
    });
  }, [dispatch]);

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
