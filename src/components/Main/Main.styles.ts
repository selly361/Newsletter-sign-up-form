import styled from "styled-components";

export const StyledMain = styled.main`
  width: 800px;
  max-height: 900px;
  background-color: hsl(0, 0%, 100%);
  border-radius: 25px;
  padding: 12px;
  display: grid;
  grid-template-columns: 1.5fr 1.3fr;

  @media (max-width: 500px) {
    & {
      display: flex;
      flex-flow: column-reverse;
      align-items: center;

      width: 100vw;
      min-height: 100vh;
      border-radius: 0px;
      padding: 0px;
      padding-bottom: 20px;
      gap: 20px;
    }
  }
`;

export const Container = styled.div`
  height: 80%;
  display: flex;
  flex-flow: column;
  gap: 20px;
  padding-left: 15px;

  @media (max-width: 500px){
    align-items: start;
    padding-left: 0px;
    height: 100%;
  }
`;

export const StyledImage = styled.img`

@media (max-width: 500px){
  display: none;
}

`;

export const MobileImage = styled.img`
  display: none;

  @media (max-width: 500px){
    display: unset;
    width: 100%;
    object-fit: contain;
  }
`

export const Title = styled.h1`
  font-size: 56px;
  color: #242742;
  font-weight: 700;
  line-height: 100%;

  @media (max-width: 500px){
    & {
      font-size: 40px;
    }
  }
`;

export const Body = styled.p`
  font-size: 16px;
  line-height: 150%;
  width: 327px;
`;
