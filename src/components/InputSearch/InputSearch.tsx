import { ButtonInput } from "assets";
import { Modal } from "components";
import { UserProfile } from "components/UserProfile/UserProfile";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { StyledButton, StyledInput, StyledInputForm } from "./styles";

export const InputSearch = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledInputForm>
      <StyledInput
        placeholder="Search..."
        type={"text"}
        {...register("search")}
      />

      <StyledButton
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <ButtonInput />
      </StyledButton>
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </StyledInputForm>
  );
};
