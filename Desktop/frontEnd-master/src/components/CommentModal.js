import React from "react";
import styled from "styled-components";
const Modal = ({ children, styles }) => {
  return (
    <ModalWrapper>
      <ModalContentWrapper>
        <ContentArea style={styles}>
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

const ContentArea = styled.div`
  width: 100%;
  height: auto;
  display: block;
  // background-color: red;
  text-align: center;
  position: relative;
  border-radius: 6px;
`;
