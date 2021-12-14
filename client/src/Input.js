import React from "react";
import styled from "styled-components";

const InputStyled = styled.input``;

export default function Input({ url, setUrl }) {
  return (
    <InputStyled
      type="text"
      placeholder="Enter url to shorten"
      value={url}
      onChange={(e) => setUrl(e.target.value)}
    ></InputStyled>
  );
}
