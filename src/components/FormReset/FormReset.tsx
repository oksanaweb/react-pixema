import { Button } from "components";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  ButtonWrap,
  ErrorMessage,
  FormWrap,
  InputBox,
  InputEmail,
  InputTitle,
  Message,
  StyledForm,
  StyledLink,
  StyledMessage,
  Title,
  TitleForm,
} from "./styles";
import { useAppDispatch } from "store";
import { emailValidate } from "services";
import { fetchResetPassword } from "store/features";
import { useToggle } from "hooks";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";

interface FormValues {
  email: string;
}

export const FormReset = () => {
  const [isToggle, setToggle] = useToggle();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormValues> = async (user) => {
    await dispatch(fetchResetPassword(user)).unwrap();
    await setToggle();
    await reset();
  };

  return (
    <FormWrap>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <TitleForm>Reset password</TitleForm>
        {isToggle && <Message>You will receive an email a link to reset your password!</Message>}
        <InputBox>
          <InputTitle>Email</InputTitle>
          <InputEmail placeholder="Your Email" {...register("email", emailValidate())} />
          {errors.email?.message && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputBox>

        <ButtonWrap>
          <Button type="submit">Reset Password</Button>
        </ButtonWrap>
        <StyledMessage>
          <Title>After updating your password go to</Title>
          <StyledLink to={ROUTE.Sign_in}>Sign in</StyledLink>
        </StyledMessage>
      </StyledForm>
    </FormWrap>
  );
};
