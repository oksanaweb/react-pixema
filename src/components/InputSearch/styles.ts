import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors, Media, Typography } from "ui";

export const StyledInputForm = styled.form`
  grid-area: input;
  position: relative;
`;

export const Wrapper = styled.div`
  width: clamp(300px, 100%, 1100px);
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  place-items: center;
  max-width: auto;
  grid-gap: 20px;
  padding: 20px 20px;
  grid-template-areas: "logo input  button";
  ${Media.XS} {
    grid-template-areas:
      "logo button"
      "input input";
  }

  ${Media.XS} {
    margin: auto;
  }
`;

export const StyledInput = styled.input`
  padding: 18px 16px 16px 20px;
  width: 1100px;
  border-radius: 10px;
  min-height: 56px;
  background: ${Colors.GRAPHITE};
  color: ${Colors.WHITE};
  cursor: pointer;
  ${Media.XL} {
    width: 700px;
  }
  ${Media.L} {
    width: 550px;
  }
  ${Media.M} {
    width: 340px;
  }
  ${Media.XS} {
    margin-left: 20px;
  }
  &-placeholder {
    ${Typography.S1}
  }
  &:focus {
    background: ${Colors.DARK};
  }
`;

export const Container = styled.div`
  grid-area: input;
`;

export const StyledButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  cursor: pointer;
`;

export const StyledLogo = styled(Link)`
  grid-area: logo;
  justify-self: start;
`;

export const BurgerButton = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 10px;
  background-color: ${Colors.PRIMARY};
  cursor: pointer;
`;

export const StyledUserProfile = styled.div`
  max-width: 300px;
  grid-area: button;
`;

export const BurgerWrap = styled.div`
  justify-self: end;
`;

export const Box = styled.div`
  grid-area: button;
`;
