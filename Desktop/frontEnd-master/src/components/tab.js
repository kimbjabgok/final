import React, { useState } from "react";
import styled from "styled-components";
import items from "../mock.json";

const Button = styled.button`
  background-color: ${props => (props.isActive ? "black" : "white")};
  color: ${props => (props.isActive ? "white" : "black")};
  border: none;
  cursor: pointer;
  border-radius:22.5px;
  width: 66px;
  height: 45px;
  white-space: nowrap;
  }
`;

const ButtonText = styled.span`
  width: 26px;
  height: 18px;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.03em;
  color: ${props => (props.isActive ? "white" : "black")};
`;

const ToggleButtons = () => {
  const [isPublicActive, setIsPublicActive] = useState(true);
  const [isPrivateActive, setIsPrivateActive] = useState(false);

  const filteredItems = items.filter(item =>
    isPublicActive ? item.Public === "공개" : item.Public === "비공개",
  );

  return (
    <div>
      <Button
        isActive={isPublicActive}
        onClick={() => {
          setIsPublicActive(true);
          setIsPrivateActive(false);
        }}
      >
        <ButtonText isActive={isPublicActive}>공개</ButtonText>
      </Button>
      <Button
        isActive={isPrivateActive}
        onClick={() => {
          setIsPrivateActive(true);
          setIsPublicActive(false);
        }}
      >
        <ButtonText isActive={isPrivateActive}>비공개</ButtonText>
      </Button>
    </div>
  );
};

export default ToggleButtons;
