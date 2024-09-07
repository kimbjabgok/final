import styled from "styled-components";
import { useState } from "react";

const ToggleButton = () => {
  const [disclosure, setDisclosure] = useState(true);

  const handleToggle = () => {
    setDisclosure(prev => !prev);
  };

  return (
    <ToggleContainer onClick={handleToggle}>
      <CheckBox type="checkbox" checked={disclosure} onChange={handleToggle} />
      <ToggleSlider />
    </ToggleContainer>
  );
};

export default ToggleButton;

const ToggleContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    top: 1px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const CheckBox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${ToggleSlider} {
    background-color: #282828;
  }

  &:focus + ${ToggleSlider} {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + ${ToggleSlider}:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;
