import React from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import {Route, NavLink} from 'react-router-dom';
import CharacterList from './components/CharacterList';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Main = styled.main`
  background: linear-gradient(to top, gray, white);
`;

export default function App() {
  return (
    <Main>
      <Header />
      <NavContainer>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/characters'>Charaters</NavLink>
      </NavContainer>

      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' component={CharacterList} />
    </Main>
  );
};