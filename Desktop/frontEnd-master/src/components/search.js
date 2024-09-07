import styled from "styled-components";
import searchImg from "../images/search.svg";

const SearchContainer = styled.div`
  width: 1186px;
  height: 48px;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 6px;
  padding: 0 8px;
  background-color: #f4f4f4;
  position: relative;
  left: 10px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  font-family: Spoqa Han Sans Neo;
  background-color: #f4f4f4;
`;

const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  left: 20px;
`;

const Searchbox = ({ value, onChange }) => {
  return (
    <SearchContainer>
      <SearchIcon src={searchImg} alt="Search Icon" />
      <StyledInput
        type="search"
        placeholder="그룹명을 검색해 주세요"
        value={value}
        onChange={onChange}
      />
    </SearchContainer>
  );
};

export default Searchbox;
