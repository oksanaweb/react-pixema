import styled from "styled-components";
import { Colors, Media, Typography } from "ui";

export const ContainerMovie = styled.div`
  display: grid;
  grid-template-columns: 270px 1fr;
  grid-gap: 30px;

  ${Media.M} {
    display: flex;
    flex-direction: column;
    place-items: center;
  }
  ${Media.XS} {
    align-items: flex-start;
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 20px;

  ${Media.M} {
    width: 100%;
    height: 100%;
    justify-self: center;
  }
`;

export const ButtonFavorite = styled.button``;

export const PosterWrap = styled.div``;

export const DetailsWrap = styled.div`
  width: 70%;

  ${Media.M} {
    width: 40%;
  }
`;

export const GenreTitle = styled.span`
  ${Typography.S3}
  color:${Colors.LIGHT}
`;

export const TitleMovie = styled.p`
  ${Typography.H1}
  color:${Colors.WHITE}
`;

export const RatingBox = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(3, auto);
  grid-column-gap: 20px;
  margin-bottom: 40px;
`;

export const Rating = styled.div`
  padding: 2px 8px;
  border-radius: 6px;
  width: 37px;
  height: 28px;
  text-align: center;
  background-color: ${Colors.GREEN};
  ${Typography.S2}
  color: ${Colors.WHITE};
`;

export const RatingImdb = styled.div`
  padding: 2px 2px;
  width: 79px;
  text-align: center;
  border-radius: 6px;
  background-color: ${Colors.BLACK};
  ${Typography.S2};
  color: ${Colors.WHITE};
`;

export const RunTime = styled.div`
  width: 73px;
  padding: 2px 8px;
  text-align: center;
  border-radius: 6px;
  background-color: ${Colors.BLACK};
  ${Typography.S2};
  color: ${Colors.WHITE};
`;

export const MoviePlot = styled.div`
  ${Typography.B1};
  margin-bottom: 50px;
  color: ${Colors.WHITE};
`;

export const MovieDescription = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;

export const InfoMovie = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 50px;
`;

export const Title = styled.p`
  ${Typography.S3}
  color:${Colors.LIGHT}
`;

export const Description = styled.p`
  ${Typography.S3}
  color:${Colors.WHITE}
`;

export const SliderWrapper = styled.div`
  margin: 0 auto;
`;

export const SliderTitleWrapper = styled.div``;

export const SliderTittle = styled.p`
  ${Typography.H2}
  color:${Colors.WHITE};
  margin-bottom: 10px;
`;
