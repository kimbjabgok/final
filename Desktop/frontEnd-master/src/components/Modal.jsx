import React from "react";
import styled from "styled-components";
import close from "../assets/images/close.svg";
const Modal = ({ children, setIsOpend, styles }) => {
  return (
    <ModalWrapper>
      <ModalContentWrapper>
        <ContentArea style={styles}>
          <CloseButton onClick={() => setIsOpend(prev => !prev)}>
            <img src={close} alt="closeBtn" />
          </CloseButton>
          <div>{children}</div>
        </ContentArea>
      </ModalContentWrapper>
    </ModalWrapper>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 600;
`;

const ModalContentWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: 480px;

  /* background-color: red; */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const CloseButton = styled.div`
  position: absolute;
  width: 34px;
  height: 34px;
  /* border:1px solid #000; */
  top: 40px;
  right: 40px;
  z-index: 500;
  :hover {
    cursor: pointer;
  }
`;

const ContentArea = styled.div`
  width: 100%;
  height: auto;
  display: block;
  // background-color: red;
  text-align: center;
  position: relative;
  border-radius: 6px;
`;
