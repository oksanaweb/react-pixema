import { Button } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { useAppDispatch, useAppSelector } from "store";
import { fetchSignUpUser } from "store/features/UserSlice/UserSlice";
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

interface UserInfo {
  email: string;
  password: string;
  userName: string;
  confirmPassword: string;
}

export const FormSignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    getValues,
    formState: { errors },
  } = useForm<UserInfo>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { errorMessage } = useAppSelector(getUserInfo);

  const onSubmit: SubmitHandler<UserInfo> = async (user) => {
    await dispatch(fetchSignUpUser(user)).unwrap();
    await localStorage.setItem("user", JSON.stringify(user)); //not work
    await navigate(ROUTE.Home);
    await reset();
  };

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  return (
    <FormWrap>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <TitleForm>Sign Up</TitleForm>

        <InputBox>
          <InputTitle>Name</InputTitle>
          <InputName placeholder="Name" {...register("userName", nameValidate())} />
          {errors.userName?.message && <ErrorMessage>{errors.userName.message}</ErrorMessage>}
        </InputBox>

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
        </InputBox>

        <InputBox>
          <InputTitle>Confirm Password</InputTitle>
          <InputConfirmPassword
            placeholder="Confirm Password"
            {...register("confirmPassword", { required: true })}
          />
        </InputBox>
        {errorMessage && <StyledError>{errorMessage}</StyledError>}

        {getValues("password") &&
          getValues("confirmPassword") &&
          getValues("password") !== getValues("confirmPassword") && (
            <ErrorReport>Passwords do not match</ErrorReport>
          )}

        <ButtonWrap>
          <Button type="submit">Sign up</Button>
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
