import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import ShortUrl from "./ShortUrl";
import styled from "styled-components";

const AppWrapper = styled.div`
  text-align: center;
`;

export default function App() {
  const [url, setUrl] = useState("");
  const [shortenUrl, setShortenUrl] = useState("Test");

  return (
    <AppWrapper>
      <h1>Url shortener</h1>
      <Input url={url} setUrl={setUrl} />
      <Button />
      <ShortUrl shortenUrl={shortenUrl} />
    </AppWrapper>
  );
}
