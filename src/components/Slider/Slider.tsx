import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/bundle";
import { FreeMode, Navigation, Pagination } from "swiper";
import { SlideContainer } from "./styles";
import { Slide } from "components";
import { useAppSelector } from "store";
import { getMovies } from "store/selectors";

export const Slider = () => {
  const { movies } = useAppSelector(getMovies);
  return (
    <SlideContainer>
      <Swiper
        modules={[Navigation, Pagination, FreeMode]}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => "slide change"}
        onSwiper={(swiper) => swiper}
      >
        <SlideContainer>
          {movies.map((movie) => {
            return (
              <SwiperSlide>
                <Slide movie={movie} key={movie.imdbID} />
              </SwiperSlide>
            );
          })}
        </SlideContainer>
      </Swiper>
    </SlideContainer>
  );
};
