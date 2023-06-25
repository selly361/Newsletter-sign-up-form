import {
  Container,
  Error,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "./Form.styles";

import { isEmailValid } from "utils/isEmailValid";
import { useState } from "react";



function Form() {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false)

  const isNotValid = touched && !isEmailValid(email);

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
        onChange={(e) => {
          setEmail(e.target.value)
          setTouched(true)
        }}
      />
      <StyledButton>Subscribe to monthly newsletter</StyledButton>
    </StyledForm>
  );
}

export default Form;
