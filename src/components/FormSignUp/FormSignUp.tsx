import { Button, SmallSpinner } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { useAppDispatch, useAppSelector } from "store";
import { fetchSignUpUser, setAuth } from "store/features/UserSlice/UserSlice";
import { getUserInfo } from "store/selectors";
import {
  ButtonWrap,
  ErrorMessage,
  ErrorReport,
  FormWrap,
  InputBox,
  InputConfirmPassword,
  InputEmail,
  InputName,
  InputPassword,
  InputTitle,
  SignUpLink,
  SignUpTitle,
  StyledError,
  StyledForm,
  StyledLink,
  TitleForm,
} from "./styles";
import { emailValidate, nameValidate, passwordValidate } from "services";
import { useRef, useState } from "react";

interface UserInfo {
  email: string;
  password: string;
  userName: string;
  confirmPassword: string;
  isAuth: boolean;
}

export const FormSignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<UserInfo>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading, errorMessage } = useAppSelector(getUserInfo);

  const onSubmit: SubmitHandler<UserInfo> = async (user) => {
    await dispatch(fetchSignUpUser(user))
      .unwrap()
      .then((user) => {
        dispatch(setAuth(user));
      });
    await navigate(ROUTE.Home);
    await reset();
  };

  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(false);
  const [showErrorText, setShowErrorText] = useState(false); // ADDED
  function style(error: boolean) {
    if (error) {
      return { backgroundColor: "rgba(255, 0, 0, 0.5)" };
    }
  }
  const ref = useRef<HTMLInputElement>(null);
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!error) {
      if (event.target.validity.patternMismatch) {
        ref.current?.focus();
        setError(true);
        setShowErrorText(true);
      }
    }
    if (error) {
      setShowErrorText(false);
    }
  };
  const handleChange = (event: React.FocusEvent<HTMLInputElement>) => {
    const newValueIsValid = !event.target.validity.patternMismatch;
    if (error) {
      if (newValueIsValid) {
        setError(false);
        setShowErrorText(false);
      }
    }
    setUserInput(event.target.value);
  };
  const handleFocus = () => {
    if (error) {
      setShowErrorText(true);
    }
  };

  return (
    <FormWrap>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <TitleForm>Sign Up</TitleForm>

        <InputBox>
          <InputTitle>Name</InputTitle>
          <InputName
            placeholder="Name"
            {...register("userName", nameValidate())}
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            ref={ref}
            style={style(error)}
          />
          {errors.userName?.message && <ErrorMessage>{errors.userName.message}</ErrorMessage>}
        </InputBox>

        <InputBox>
          <InputTitle>Email</InputTitle>
          <InputEmail placeholder="Your Email" {...register("email", emailValidate())} />
          {errors.email?.message && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputBox>

        <InputBox>
          <InputTitle>Password</InputTitle>
          <InputPassword type="password" placeholder="Your password" {...register("password", passwordValidate())} />
          {errors.password?.message && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        </InputBox>

        <InputBox>
          <InputTitle>Confirm Password</InputTitle>
          <InputConfirmPassword
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", { required: true })}
          />
        </InputBox>
        {errorMessage && <StyledError>{errorMessage}</StyledError>}

        {getValues("password") &&
          getValues("confirmPassword") &&
          getValues("password") !== getValues("confirmPassword") && <ErrorReport>Passwords do not match</ErrorReport>}
        <ButtonWrap>
          <Button type="submit"> Sugn Up {isLoading && <SmallSpinner />}</Button>
        </ButtonWrap>

        {errors.confirmPassword && <p>Passwords do not match</p>}
        <SignUpLink>
          <SignUpTitle>Already have an account?</SignUpTitle>
          <StyledLink to={ROUTE.Sign_in}>Sign In</StyledLink>
        </SignUpLink>
      </StyledForm>
    </FormWrap>
  );
};
