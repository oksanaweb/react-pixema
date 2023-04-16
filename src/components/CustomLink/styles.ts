import { Link, NavLink, PathMatch } from "react-router-dom";
import styled from "styled-components";
import { Colors, Typography } from "ui";

type isActive = { $isActive: PathMatch<string> | null };

export const StyledCustomLink = styled(Link)<isActive>`
  display: grid;
  grid-template-columns: repeat(2, 50px);
  grid-gap: 15px;
  ${Typography.S1}
  line-height: 24px;
  text-decoration: none;
  color: ${({ $isActive }) => ($isActive ? Colors.PRIMARY : Colors.SECONDARY)};
  fill: ${({ $isActive }) => ($isActive ? Colors.PRIMARY : Colors.SECONDARY)};

  &:hover {
    color: ${Colors.PRIMARY};
    fill: ${Colors.PRIMARY};
  }
`;
