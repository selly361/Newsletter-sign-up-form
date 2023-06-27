import {
  Container,
  Error,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "./Form.styles";

import { isEmailValid } from "utils/isEmailValid";
import { useAppContext } from "hooks/useAppContext";
import { useState } from "react";

function Form() {
  const { handleInputChange, handleSubmit, email, isNotValid } = useAppContext()

  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <Container>
        <StyledLabel htmlFor="email">Email Address</StyledLabel>
        {isNotValid && <Error>Valid email required</Error>}
      </Container>
      <StyledInput
        
        className={isNotValid ? "error" : ""}
        placeholder="email@company.com"
        id="email"
        value={email}
        onChange={handleInputChange}
      />
      <StyledButton onClick={handleSubmit}>Subscribe to monthly newsletter</StyledButton>
    </StyledForm>
  );
}

export default Form;
