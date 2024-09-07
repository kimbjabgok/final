// Header.jsx
import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";
//import { ReactComponent as Logo } from '../logo.svg';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  margin-top: 26px;
  margin-left:520px;
  gap:300px;
`;


const Header = () => {
  return (
    <HeaderContainer>
        <Link to="/">
          <img src="logo.svg" alt="logo" />
        </Link>
      <Link to="/CreateGroup" style={{ textDecoration: "none" }}>
        <Button size="medium">그룹 만들기</Button>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
