import React, { useState } from "react";
import axios from "axios";
import Input from "./Input";
import Button from "./Button";
import ShortUrl from "./ShortUrl";
import styled from "styled-components";

const AppWrapper = styled.div`
  text-align: center;
`;

export default function App() {
  const [url, setUrl] = useState("");
  const [shortenUrl, setShortenUrl] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted url");

    const fullUrl = {
      url: url,
    };

    axios
      .post("http://localhost:9000/shortUrl/add", fullUrl)
      .then((res) => setShortenUrl(res.data));

    setUrl("");
  };

  return (
    <AppWrapper>
      <h1>Url shortener</h1>
      <Input url={url} setUrl={setUrl} />
      <Button onSubmit={handleSubmit} />
      <ShortUrl shortenUrl={shortenUrl} />
    </AppWrapper>
  );
}
