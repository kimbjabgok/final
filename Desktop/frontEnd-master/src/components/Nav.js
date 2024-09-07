import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  margin-top: 26px;
  margin-bottom: 26px;
`;

const Nav = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src="logo.svg" alt="logo" />
      </Link>
    </HeaderContainer>
  );
};

export default Nav;
