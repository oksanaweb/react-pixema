import styled from "styled-components";
import { BackgroundImage } from "assets";
import { Link } from "react-router-dom";

export const StyledAuth = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 35px 50px;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const LogoWrap = styled(Link)``;

export const StyledCopyright = styled.p``;

export const StyledOutlet = styled.div`
  display: grid;
  place-items: center;
`;
