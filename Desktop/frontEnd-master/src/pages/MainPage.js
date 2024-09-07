import styled from "styled-components";
import GroupList from "./Content";
import items from "../mock.json";
import MoreButton from "../components/More";
import SecondNav from "../components/SecondNav";
import { useState } from "react";
import search from "../assets/images/search.svg";
import Header from "../components/Header";
import CreateGroupForm from "../components/CreateGroupForm"

const GroupContainer = styled.div`
  margin-top: 20px;
  padding: 0 180px;
`;

function Mainpage() {
  const [btnState, setBtnState] = useState("public");
  const [sortOption, setSortOption] = useState('Latest');
  const [search,setSearch]=useState("");
  const [groupList, setGroupList] = useState(items);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddGroup = (newGroup) => {
    setGroupList((prevGroups) => [newGroup, ...prevGroups]);
  };

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
      <Header />
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
      <GroupContainer>
        <GroupList items={searchData} sortOption={sortOption} btnState={btnState}/>
        <MoreButton />
      </GroupContainer>
    </>
  );
}

export default Mainpage;

const PHeaderBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 76%;
  margin-left: 180px;
  margin-top: 26px;
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