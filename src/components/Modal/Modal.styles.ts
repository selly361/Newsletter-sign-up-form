import styled from "styled-components";

export const StyledModal = styled.div`
  width: 504px;
  height: 520px;
  border-radius: 36px;
  background: #fff;
  box-shadow: 0px 15px 60px 0px rgba(0, 0, 0, 0.25);
  padding: 48px 64px 64px 64px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 30px;

  @media (max-width: 550px) {
    width: 100vw;
    height: 100vh;
    border-radius: 0px;
    padding: 0px;
    padding-left: 24px;
    padding-top: 149px;
  }
`;

export const ModalTitle = styled.h1`
  color: #242742;
  font-size: 56px;
  font-weight: 700;
  line-height: 100%;

  @media (max-width: 550px) {
    font-size: 40px;
    width: 327px;
  }
`;

export const ModalParagraph = styled.p`
  color: #242742;
  font-size: 16px;
  line-height: 150%;
  width: 376px;

  @media (max-width: 550px) {
    width: 327px;
  }
`;
export const ModalEmail = styled(ModalParagraph)`
  font-weight: bold;
  display: inline;
`;

export const ModalButton = styled.button`
  width: 376px;
  height: 56px;
  border-radius: 8px;
  background: #36384d;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: linear-gradient(225deg, #ff6a3a 0%, #ff527b 100%);
    box-shadow: 0px 16px 32px 0px rgba(255, 97, 85, 0.5);
  }

  &:active {
    transform: scale(0.96);
  }

  @media (max-width: 550px) {
    width: 327px;
    height: 56px;
    position: absolute;
    bottom: 40px;
  }
`;
