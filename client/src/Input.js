import React from "react";
import styled from "styled-components";

const InputStyled = styled.input`
  width: 35%;
  padding: 5px;
  border-radius: 5px;
`;

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
