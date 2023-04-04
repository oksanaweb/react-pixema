import React from "react";
import {
  ButtonBox,
  ButtonCancel,
  ButtonSave,
  Container,
  ErrorMessage,
  ErrorReport,
  InputTitle,
  PasswordBox,
  PasswordContainer,
  ProfileBox,
  ProfileContainer,
  StyledForm,
  StyledInput,
  Title,
  WrapInput,
} from "./styles";
import { InputBox } from "components/FormSignIn/styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { emailValidate, nameValidate, passwordValidate } from "services";
import { useAppDispatch } from "store";
import { fetchUpdateEmail, fetchUpdatePassword, updateUserName } from "store/features";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { useToggle } from "hooks";
import { SettingFormModal } from "components";

interface FormValues {
  userName: string;
  email: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
}

export const SettingForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isOpen, setToggle] = useToggle(false);

  const onSubmit: SubmitHandler<FormValues> = async (user) => {
    try {
      await dispatch(updateUserName(user.userName));
      await dispatch(fetchUpdateEmail(user)).unwrap();
      await dispatch(fetchUpdatePassword(user)).unwrap();
      setTimeout(() => {
        setToggle();
      }, 1000);
      setTimeout(() => {
        navigate(ROUTE.Home);
      }, 3500);
    } catch (error) {
      console.error(error);
    }
    //localstorage ??
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
  } = useForm<FormValues>();

  const password = watch("password", "");
  console.log(watch("password"));

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <ProfileBox>
          <Title>Profile</Title>
          <ProfileContainer>
            <InputBox>
              <InputTitle>Name</InputTitle>
              <StyledInput
                type="text"
                placeholder="Your name"
                {...register("userName", nameValidate())}
              />
              {errors.userName?.message && <ErrorMessage>{errors.userName.message}</ErrorMessage>}
            </InputBox>

            <InputBox>
              <InputTitle>Email</InputTitle>
              <StyledInput
                type="text"
                placeholder="Your email"
                {...register("email", emailValidate())}
              />
              {errors.email?.message && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </InputBox>
          </ProfileContainer>
        </ProfileBox>
        <PasswordBox>
          <Title>Password</Title>
          <PasswordContainer>
            <WrapInput>
              <InputBox>
                <InputTitle>Password</InputTitle>
                <StyledInput
                  type="text"
                  placeholder="Your password"
                  {...register("password", passwordValidate())}
                />
                {errors.password?.message && <ErrorMessage>{errors.password.message}</ErrorMessage>}
              </InputBox>
            </WrapInput>

            <WrapInput>
              <InputBox>
                <InputTitle>New Password</InputTitle>
                <StyledInput
                  type="text"
                  placeholder="New Password"
                  {...register("newPassword", passwordValidate())}
                />
                {errors.newPassword?.message && (
                  <ErrorMessage>{errors.newPassword.message}</ErrorMessage>
                )}
              </InputBox>

              <InputBox>
                <InputTitle>Confirm Password</InputTitle>
                <StyledInput
                  type="text"
                  placeholder="Confirm password"
                  {...register("confirmPassword", passwordValidate())}
                />
                {errors.confirmPassword?.message && (
                  <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
                )}

                {getValues("newPassword") &&
                  getValues("confirmPassword") &&
                  getValues("newPassword") !== getValues("confirmPassword") && (
                    <ErrorReport>Passwords do not match</ErrorReport>
                  )}
              </InputBox>
            </WrapInput>
          </PasswordContainer>
        </PasswordBox>

        <ButtonBox>
          <ButtonCancel type="button">Cancel</ButtonCancel>
          <ButtonSave type="submit">Save</ButtonSave>
        </ButtonBox>
      </StyledForm>
      <SettingFormModal toggleModal={setToggle} isOpen={isOpen} />
    </Container>
  );
};
