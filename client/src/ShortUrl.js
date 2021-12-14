import React from "react";
import styled from "styled-components";

const ShortUrlWrapper = styled.div``;

export default function ShortUrl({ shortenUrl }) {
  return <ShortUrlWrapper>ShortURL {shortenUrl}</ShortUrlWrapper>;
}
