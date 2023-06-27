import {
  Body,
  Container,
  MobileImage,
  StyledImage,
  StyledMain,
  Title,
} from "./Main.styles";
import { Form, List } from "components";

import React from "react";

function Main() {
  return (
    <StyledMain>
      <Container>
        <Title>Stay Updated!</Title>
        <Body>Join 60,000+ product managers receiving monthly updates on:</Body>
        <List />
        <Form />
      </Container>
      <StyledImage src={"images/illustration-sign-up-desktop.svg"} />
      <MobileImage src={"images/illustration-sign-up-mobile.svg"} />
    </StyledMain>
  );
}

export default Main;
