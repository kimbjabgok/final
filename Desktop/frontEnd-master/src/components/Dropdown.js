import styled from "styled-components";

const DropdownContainer = styled.select`
  width: 160px;
  height: 45px;
  border-radius: 6px;
  margin-left: auto;
`;

const DropdownText = styled.option`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.03em;
  color: #282828;
`;

const Dropbox = () => {
  return (
    <DropdownContainer>
      <DropdownText value="option1">공감순</DropdownText>
    </DropdownContainer>
  );
};

export default Dropbox;
