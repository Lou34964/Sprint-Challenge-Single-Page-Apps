import React from "react";
import '../../src/MainImg.css'
import styled from 'styled-components';

const Img = styled.img`
  width: 100vh;
  border-radius: 8px;
  box-shadow: 2px 2px 0 0 black;
`;

const Quote = styled.h3`
  text-decoration: wavy;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <Quote>Yeah, welcome to the club, pal.</Quote>
      </header>
    </section>
  );
}
