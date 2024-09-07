// Footer.jsx
import React from "react";
import styled from "styled-components";

// Styled Component 정의
const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 조각집. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
