import React from "react";
import styled from "styled-components";

const ShortUrlWrapper = styled.div`
  padding: 18px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid black;

  a {
    margin-left: 18px;
  }
`;

export default function ShortUrl({ shortenUrl }) {
  return (
    <ShortUrlWrapper>
      Shorten Url:
      <a href={shortenUrl.full} target="_blank" rel="noreferrer">
        {shortenUrl.short}
      </a>
    </ShortUrlWrapper>
  );
}
