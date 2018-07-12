import React from "react";
import styled from "styled-components";
import { Cell } from "styled-css-grid";

const CardImage = styled.img`
  height: 100px;
  width: auto;
  z-index: 1;
`;

const CardBody = styled.div`
  background-color: #262626;
  display: grid;
  align-content: center;
  justify-content: center;
  font-family: "Trebuchet MS", Verdana, sans-serif;
  align-items: center;
  justify-items: center;
  height: 220px;
  border-radius: 5px;
  animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  @keyframes text-focus-in {
    0% {
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes rotate-center {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  &:hover {
    transition: 0.5s ease;
    box-shadow: inset 0 0 2px 2px #888;
    img {
      animation: rotate-center 0.6s ease-in-out both;
    }
    h1,
    p {
      transition: 0.8s ease;
      transform: scale(0.9);
    }
  }
`;

const CardName = styled.h1`
  color: ${props => (props.primary ? "royalblue" : "white")};
  padding: 3px;
  font-size: ${props => (props.primary ? "22px" : "16px")};
`;

const CardPhrase = styled.p`
  color: white;
  padding: 3px;
  font-size: 16px;
  text-align: center;
`;

const Cat = ({ name, username, phrase, id }) => {
  return (
    <Cell>
      <CardBody>
        <CardImage src={`https://robohash.org/${id}?set=set4`} alt="cats" />
        <CardName primary>{name}</CardName>
        <CardName>Call me {username}</CardName>
        <CardPhrase>I'm a specialist in {phrase}</CardPhrase>
      </CardBody>
    </Cell>
  );
};

export default Cat;
