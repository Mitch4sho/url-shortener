import React from "react";
import styled from "styled-components";

const ShortUrlWrapper = styled.div``;

export default function ShortUrl({ shortenUrl }) {
  console.log(shortenUrl);
  return (
    <ShortUrlWrapper>
      ShortURL
      <a href={shortenUrl.full} target="_blank" rel="noreferrer">
        {shortenUrl.short}
      </a>
    </ShortUrlWrapper>
  );
}
