import styled from "styled-components";

const StyledMore = styled.button`
  width: 100%;
  height: 60px;
  border: 1px solid black;
  border-radius: 6px;
  background-color: #fafafa;
  margin-top: 60px;
  margin-bottom: 100px;
  cursor: pointer;
`;

function MoreButton() {
  return <StyledMore>더보기</StyledMore>;
}

export default MoreButton;
