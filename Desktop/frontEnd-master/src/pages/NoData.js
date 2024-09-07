import styled from "styled-components";
import Searchbox from "../components/search";
import ToggleButtons from "../components/tab";
import Dropbox from "../components/Dropdown";
import NoDataImg from "../images/icon.svg";
import SecondNav from "../components/SecondNav";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getReviews } from "../api";
import search from "../assets/images/search.svg";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  padding-top: 200px;
`;

const NoDataIcon = styled.div`
  background-image: url(${NoDataImg});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100px;
  height: 100px;
`;

const NoGroupMessage = styled.p`
  width: 208px;
  height: 23px;
  font-family: Spoqa Han Sans Neo;
  font-size: 18px;
  font-weight: 700;
  line-height: 22.54px;
  letter-spacing: -0.03em;
  text-align: center;
  color: #8d8d8d;
  white-space: nowrap;
  padding-right: 20px;
`;

const CreateGroupMessage = styled.p`
  width: 175px;
  height: 18px;
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.53px;
  letter-spacing: -0.03em;
  text-align: center;
  color: #b8b8b8;
  white-space: nowrap;
  padding-right: 10px;
  padding-bottom: 150px;
`;


const PHeaderBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 76%;
  margin-left: 180px;
`;

const PHeaderBottomBtn = styled.button`
  border-radius: 100px;
  border: none;
  padding: 14px 20px;
  background-color: ${props => (props.active ? "#282828" : "unset")};
  color: ${props => (props.active ? "#fff" : "#282828")};
`;
const SearchBar = styled.div`
  flex: 1;
  background-color: #eee;
  display: flex;
  padding-left: 10px;
  align-items: center;
  height: 45px;
  border-radius: 6px;
  i {
    display: block;
    width: 40px;
    height: 50%;
    background: url(${search}) no-repeat center / contain;
  }
  input {
    display: block;
    width: 100%;
    background-color: unset;
    border: none;
    margin-right: 40px;
    padding: 14px;
    box-sizing: border-box;
    height: 100%;
  }
  input:focus {
    outline: none;
  }
  button {
    display: block;
  }
`;

const SortToggle = styled.div`
  position: relative;
  select   {
    box-sizing: border-box;
    width: 160px;
    border-radius: 6px;
    border: 1px solid #282828;
    color: #282828;
    padding: 14px 20px;
    margin-left: 40px;
  }
  ul {
    display: none;
    box-sizing: border-box;
    width: 160px;
    padding: 0;
    list-style-type: none;
    position: absolute;
    background-color: #fff;
    left: 40px;

    text-align: center;
  }
`;

const NoData = () => {
  const [items, setItems] = useState([]);
  const handleLoadClick = async () => {
    const { reviews } = await getReviews();
    setItems(reviews);
  };
  const [btnState, setBtnState] = useState("public");
  const [sortOption, setSortOption] = useState('Latest');
  const [search,setSearch]=useState("");
  const handleButtonClick = button => {
    setBtnState(button);
  };
  const handleSelect = e =>{
    setSortOption(e.target.value);
  }
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const searchData = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
    <PHeaderBottom>
        <PHeaderBottomBtn
          active={btnState === "public"}
          onClick={() => handleButtonClick("public")}
        >
          공개
        </PHeaderBottomBtn>
        <PHeaderBottomBtn
          active={btnState === "private"}
          onClick={() => handleButtonClick("private")}
        >
          비공개
        </PHeaderBottomBtn>
        <SearchBar>
          {/* 여기 아이콘 추가해주기 */}
          <i />
          <input type="text" placeholder="태그 혹은 제목을 입력해 주세요" value={search} onChange={handleSearchChange}/>
        </SearchBar>
        <SortToggle>
          <select onChange={handleSelect} value={sortOption}>
          <option value="Latest">최신순</option>
          <option value="MostPost">게시글 많은순</option>
          <option value="empathy">공감순</option>
          <option value="MostBadge">획득 배지순</option>
          </select>
        </SortToggle>
      </PHeaderBottom>
      <Container>
        <NoDataIcon />
        <NoGroupMessage>등록된 공개 그룹이 없습니다.</NoGroupMessage>
        <CreateGroupMessage>가장 먼저 그룹을 만들어보세요!</CreateGroupMessage>
        <Link to="/CreateGroup" style={{ textDecoration: "none" }}>
          <Button size="large">그룹 만들기</Button>
        </Link>
      </Container>
    </>
  );
};


export default NoData;

