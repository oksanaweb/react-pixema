import { Button } from "components";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ROUTE } from "router";
import {
  ButtonWrap,
  ErrorMessage,
  FormWrap,
  InputBox,
  InputEmail,
  InputPassword,
  InputTitle,
  SignUpLink,
  SignUpTitle,
  StyledForm,
  StyledLink,
  TitleForm,
  TitleResetPassword,
} from "./styles";
import { emailValidate, passwordValidate } from "services";
import { getUserInfo } from "store/selectors";
import { useAppDispatch, useAppSelector } from "store";
import { useNavigate } from "react-router-dom";
import { fetchSignInUser } from "store/features";

interface FormValues {
  email: string;
  password: string;
}

export const FormSignIn = () => {
  const { isPendingAuth, errorMessage } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (user) => {
    dispatch(fetchSignInUser(user))
      .unwrap()
      .then(() => {
        navigate(ROUTE.Home);
      });
  };

  return (
    <FormWrap>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <TitleForm>Sign In</TitleForm>

        <InputBox>
          <InputTitle>Email</InputTitle>
          <InputEmail placeholder="Your Email" {...register("email", emailValidate())} />
          {errors.email?.message && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputBox>

        <InputBox>
          <InputTitle>Password</InputTitle>
          <InputPassword
            placeholder="Your password"
            {...register("password", passwordValidate())}
          />

          {errors.password?.message && <ErrorMessage>{errors.password.message}</ErrorMessage>}

          <TitleResetPassword to={ROUTE.Reset_password}>Forgot password?</TitleResetPassword>
        </InputBox>
        <ButtonWrap>
          <Button type="submit">Sign in</Button>
        </ButtonWrap>
        <SignUpLink>
          <SignUpTitle>Don’t have an account? </SignUpTitle>
          <StyledLink to={ROUTE.Sign_up}>Sign Up</StyledLink>
        </SignUpLink>
      </StyledForm>
    </FormWrap>
  );
};
