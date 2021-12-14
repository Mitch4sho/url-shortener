import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button``;

export default function Button({ onSubmit }) {
  return <ButtonStyled onClick={onSubmit}>Shorten</ButtonStyled>;
}
