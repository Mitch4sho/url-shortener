import React, { useState } from "react";
import axios from "axios";
import Input from "./Input";
import Button from "./Button";
import ShortUrl from "./ShortUrl";
import { createShortUrl } from "./ utilities";
import styled from "styled-components";

const AppWrapper = styled.div`
  text-align: center;
  height: 100vh;
  background-color: #fff2df;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export default function App() {
  const [url, setUrl] = useState("");
  const [shortenUrl, setShortenUrl] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const urls = {
      full: url,
      short: createShortUrl(),
    };

    axios.post("http://localhost:9000/shortUrl/add", urls).then((res) => {
      if (urls.full === res.data.short) {
        window.open(res.data.full, "_blank");
      } else {
        setShortenUrl(res.data);
      }
    });

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
