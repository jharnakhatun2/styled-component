import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  padding: 0 20px;
  margin: auto;
`;

export const DisplayContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  justify-content: center;
  align-items: center;
  @media only screen and (max-device-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 1rem;
  gap: 0.5rem;
  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-device-width: 768px) {
    width: 100%;
    margin: auto;
    justify-content: center;
  }
`;
