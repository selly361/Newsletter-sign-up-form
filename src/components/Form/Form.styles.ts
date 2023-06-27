import styled from "styled-components";

export const StyledForm = styled.form`
  padding-right: 10px;
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: start;

  @media (max-width: 375px) {
    & {
      align-items: center;
    }
  }
`;

export const StyledLabel = styled.label`
  color: hsl(235, 18%, 26%);
  font-weight: bold;
`;

export const Error = styled.span`
  color: #ff6155;
  font-size: 12px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 150%;
`;

export const StyledInput = styled.input`
  width: 376px;
  height: 50px;
  border: 0.1rem solid hsl(231, 7%, 60%);
  border-radius: 0.7rem;
  padding-left: 24px;

  &.error {
    border-radius: 8px;
    border: 1px solid #ff6155;
    background: rgba(255, 97, 85, 0.15);
  }

  @media (max-width: 375px) {
    & {
      width: 327px;
      height: 56px;
    }
  }
`;

export const StyledButton = styled.button`
  width: 376px;
  height: 50px;
  border-radius: 8px;
  background-color: #242742;
  color: white;
  font-weight: bold;
  transition: box-shadow 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    background: linear-gradient(225deg, #ff6a3a 0%, #ff527b 100%);
    box-shadow: 0px 16px 32px 0px rgba(255, 97, 85, 0.5);
  }

  &:active {
    transform: scale(0.96);
  }

  @media (max-width: 375px) {
    & {
      width: 327px;
      height: 56px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 376px;

  @media (max-width: 375px) {
    & {
      width: 327px;
    }
  }
`;
