import { styled } from "styled-components";

export const H1 = styled.h1`
  font-size: 4rem;
  @media only screen and (max-device-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: #fff;
  font-size: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

export const SVG = styled.svg`
  fill: #ff96d5;
  width: 1.5rem;
  height: 1.5rem;
`;

export const Image = styled.img`
  filter: drop-shadow(0px 0px 10px rgba(0 0 0 / 30%));
  max-width: 100%;
  display: block;
`;
