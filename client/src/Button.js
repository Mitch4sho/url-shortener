import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  font-size: 15px;
  padding: 10px;
  border-radius: 5px;
  background-color: #dfecff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #93bfff;
  }
`;

export default function Button({ onSubmit }) {
  return <ButtonStyled onClick={onSubmit}>Shorten</ButtonStyled>;
}
