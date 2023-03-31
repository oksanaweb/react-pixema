import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors, Typography } from "ui";

export const SlideMovie = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SlidePoster = styled.img`
  height: 100%;
  width: 70%;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 15px;
`;

export const Title = styled.h4`
  margin-top: 20px;
  ${Typography.H3}
  color:${Colors.WHITE}
`;
