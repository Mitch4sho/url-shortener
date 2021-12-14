import React from "react";
import Input from "./Input";
import Button from "./Button";
import ShortUrl from "./ShortUrl";
import styled from "styled-components";

const AppWrapper = styled.div``;

export default function App() {
  return (
    <AppWrapper>
      <h1>Url shortener</h1>
      <Input />
      <Button />
      <ShortUrl />
    </AppWrapper>
  );
}
