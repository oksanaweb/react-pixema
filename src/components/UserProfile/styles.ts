import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors, Typography } from "ui";

export const StyledUser = styled.div`
  max-width: 300px;
  display: flex;
  grid-gap: 10px;
  margin-right: 30px;
`;

export const StyledButton = styled.button`
  background-color: transparent;
`;

export const UserTextContainer = styled(Link)`
  padding: 15px 0;
  width: 100px;
  margin-left: 10px;
`;

export const UserTitle = styled.p`
  ${Typography.S2}
  color:${Colors.PRIMARY}
`;

export const StyledUserIcon = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background-color: #7b61ff;
`;

export const UserNav = styled.div`
  padding: 15px 0;
  width: 100px;
  margin-left: 10px;
`;

export const StyledText = styled.p`
  ${Typography.S1};
  color: ${Colors.WHITE};
`;

export const StyledMenu = styled.div`
  width: 100%;
  position: absolute;
  top: 100px;
  grid-gap: 10px;
  flex-direction: column;
  width: 100%;
`;

export const LogOut = styled.button`
  padding: 10px 40px;
  width: 150px;
  background-color: ${Colors.SECONDARY};
  margin-top:7px;
  border-radius:10px;
  ${Typography.S2};
  color:${Colors.WHITE}
  cursor: pointer;
`;

export const ArrowButton = styled.button`
  flex-basis: 40%;
  background-color: transparent;
  cursor: pointer;
`;

export const StyledTitle = styled.div`
  flex-basis: 60%;
`;

export const Wrap = styled.div`
  display: flex;
  grid-gap: 7px;
`;

export const StyledLink = styled(Link)`
  display: block;
  width: max-content;
  padding: 10px 40px;
  width: 150px;
  text-align: center;
  border-radius: 10px;
  background: ${Colors.SECONDARY};
  ${Typography.S2}
  color: ${Colors.WHITE};
  ${Typography.S1};
  cursor: pointer;
`;
