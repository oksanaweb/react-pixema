import { CloseIcon } from "assets";
import { CustomSelect, FilterInput } from "components";
import { Portal, PortalTarget } from "components/Portal/Portal";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { useAppDispatch } from "store";
import {
  deleteMoviesParameters,
  setMovieTitle,
  setMovieType,
  setMovieYear,
  wipeOutMovies,
} from "store/features";

import {
  Container,
  StyledButtonBox,
  StyledButtonClear,
  StyledButtonShow,
  StyledCloseButton,
  StyledError,
  StyledForm,
  StyledMovieName,
  StyledMovieTitle,
  StyledMovieTitleYear,
  StyledMovieYear,
  StyledSelect,
  StyledTitle,
  StyledTittleSelect,
  Title,
} from "./styles";
import { AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  toggleModal: (value: boolean) => void;
}

export interface Option {
  readonly value: OptionType;
  readonly label: string;
}

type OptionType = "movie" | "series" | "episode";

interface FormValues {
  s: string;
  y: string;
  type: Option;
}

const options: Option[] = [
  { value: "series", label: "series" },
  { value: "movie", label: "movie" },
  { value: "episode", label: "episode" },
];

export const Modal = ({ isOpen, toggleModal }: ModalProps) => {
  const closeModal = () => {
    toggleModal(false);
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = (filter) => {
    navigate(ROUTE.Search);
    dispatch(deleteMoviesParameters());
    dispatch(wipeOutMovies());
    dispatch(setMovieTitle(filter.s));
    dispatch(setMovieYear(filter.y));
    dispatch(setMovieType(filter.type));
  };

  const handleResetFilter = () => {
    reset();
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  return (
    <Portal target={PortalTarget.MODAL}>
      <AnimatePresence>
        {isOpen && (
          <Container
            initial={{ opacity: 0, x: "-100vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            exit={{ opacity: 0, x: "-100vh" }}
          >
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
              <StyledTitle>
                <Title>Filters</Title>
                <StyledCloseButton>
                  <CloseIcon onClick={closeModal} />
                </StyledCloseButton>
              </StyledTitle>
              <StyledMovieName>
                <StyledMovieTitle>Full or short movie name</StyledMovieTitle>
                <Controller
                  defaultValue=""
                  control={control}
                  name="s"
                  rules={{
                    required: "title is required",
                    pattern: {
                      value: /[A-Za-z]/,
                      message: "the field contain only letters",
                    },
                    maxLength: {
                      value: 15,
                      message: "the field should contain no more than 15 letters",
                    },
                  }}
                  render={({ field: { ref, ...rest } }) => (
                    <FilterInput {...rest} placeholder="Enter title" type="text" />
                  )}
                />
                {errors.s?.message && <StyledError>{errors.s.message}</StyledError>}
              </StyledMovieName>

              <StyledMovieYear>
                <StyledMovieTitleYear>Years</StyledMovieTitleYear>
                <Controller
                  defaultValue=""
                  control={control}
                  name="y"
                  rules={{
                    required: "year is required",
                    maxLength: { value: 5, message: "max 5 numbers" },
                    pattern: {
                      value: /[0-9]/,
                      message: "Please enter a valid year",
                    },
                  }}
                  render={({ field: { ref, ...rest } }) => (
                    <FilterInput {...rest} placeholder="Year" type="text" />
                  )}
                />
                {errors.y?.message && <StyledError>{errors.y.message}</StyledError>}
              </StyledMovieYear>

              <StyledSelect>
                <StyledTittleSelect>Movie Types</StyledTittleSelect>
                <Controller
                  control={control}
                  name="type"
                  render={({ field: { value, onChange } }) => (
                    <CustomSelect value={value} onChange={onChange} options={options} />
                  )}
                />
              </StyledSelect>

              <StyledButtonBox>
                <StyledButtonClear onClick={handleResetFilter}>Clear Filter</StyledButtonClear>
                <StyledButtonShow type="submit">Show results</StyledButtonShow>
              </StyledButtonBox>
            </StyledForm>
          </Container>
        )}
      </AnimatePresence>
    </Portal>
  );
};
