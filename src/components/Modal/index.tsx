import {
  ModalButton,
  ModalEmail,
  ModalParagraph,
  ModalTitle,
  StyledModal,
} from "./Modal.styles";

import React from "react";
import { SuccessIcon } from "assets";
import { useAppContext } from "hooks/useAppContext";

function Modal() {
  const { email } = useAppContext();
  return (
    <StyledModal>
      <SuccessIcon />
      <ModalTitle>Thanks for subscribing!</ModalTitle>
      <ModalParagraph>
        A confirmation email has been sent to 
        {<ModalEmail>{" " + email}</ModalEmail>}. Please open it and click the
        button inside to confirm your subscription.
      </ModalParagraph>
      <ModalButton>Dismiss message</ModalButton>
    </StyledModal>
  );
}

export default Modal;
