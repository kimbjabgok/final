import styled from "styled-components";
import { useState } from "react";
import search from "../assets/images/search.svg";
import MoreButton from "../components/More";
import { Link } from "react-router-dom";

let datas = [
  {
    titImg: "https://picsum.photos/id/237/200/300",
    id: "",
    name: "달봉이아들",
    type: "public",
    title: "에델바이스 꽃말이2 ㅇㅇㅇㅇㅇㅇ",
    tags: ["태그", "길면", "두줄"],
    place: "인천앞바다",
    date: "24.01.19",
    like: 120,
    comment: 3,
  },
  {
    titImg: "https://picsum.photos/id/235/200/300",
    id: "",
    name: "달봉이아들",
    type: "public",
    title: "에델바이스 꽃말이1 ㅇㅇㅇㅇㅇㅇ",
    tags: ["태그", "길면", "두줄"],
    place: "인천앞바다",
    date: "24.01.19",
    like: 120,
    comment: 3,
  },
  {
    titImg: "https://picsum.photos/id/233/200/300",
    id: "",
    name: "달봉이아들",
    type: "public",
    title: "에델바이스 꽃말이3 ㅇㅇㅇㅇㅇㅇ",
    tags: ["태그", "길면", "두줄"],
    place: "인천앞바다",
    date: "24.01.19",
    like: 120,
    comment: 3,
  },
  {
    titImg: "https://picsum.photos/id/233/200/300",
    id: "",
    name: "달봉이아들",
    type: "public",
    title: "에델바이스 꽃말이3 ㅇㅇㅇㅇㅇㅇ",
    tags: ["태그", "길면", "두줄"],
    place: "인천앞바다",
    date: "24.01.19",
    like: 120,
    comment: 3,
  },
  {
    titImg: "https://picsum.photos/id/233/200/300",
    id: "",
    name: "달봉이아들",
    type: "public",
    title: "에델바이스 꽃말이3 ㅇㅇㅇㅇㅇㅇ",
    tags: ["태그", "길면", "두줄"],
    place: "인천앞바다",
    date: "24.01.19",
    like: 120,
    comment: 3,
  },
  {
    titImg: "https://picsum.photos/id/233/200/300",
    id: "",
    name: "달봉이아들",
    type: "private",
    title: "에델바이스 꽃말이3 ㅇㅇㅇㅇㅇㅇ",
    tags: ["태그", "길면", "두줄"],
    place: "인천앞바다",
    date: "24.01.19",
    like: 120,
    comment: 3,
  },
  {
    titImg: "https://picsum.photos/id/233/200/300",
    id: "",
    name: "달봉이아들",
    type: "public",
    title: "에델바이스 꽃말이3 ㅇㅇㅇㅇㅇㅇ",
    tags: ["태그", "길면", "두줄"],
    place: "인천앞바다",
    date: "24.01.19",
    like: 120,
    comment: 3,
  },
  {
    titImg: "https://picsum.photos/id/233/200/300",
    id: "",
    name: "달봉이아들",
    type: "public",
    title: "에델바이스 꽃말이3 ㅇㅇㅇㅇㅇㅇ",
    tags: ["태그", "길면", "두줄"],
    place: "인천앞바다",
    date: "24.01.19",
    like: 120,
    comment: 3,
  },
  {
    titImg: "https://picsum.photos/id/233/200/300",
    id: "",
    name: "달봉이아들",
    type: "public",
    title: "에델바이스 꽃말이3 ㅇㅇㅇㅇㅇㅇ",
    tags: ["태그", "길면", "두줄"],
    place: "인천앞바다",
    date: "24.01.19",
    like: 120,
    comment: 3,
  },
  {
    titImg: "https://picsum.photos/id/233/200/300",
    id: "",
    name: "달봉이아들",
    type: "public",
    title: "에델바이스 꽃말이3 ㅇㅇㅇㅇㅇㅇ",
    tags: ["태그", "길면", "두줄"],
    place: "인천앞바다",
    date: "24.01.19",
    like: 120,
    comment: 3,
  },
  {
    titImg: "https://picsum.photos/id/233/200/300",
    id: "",
    name: "달봉이아들",
    type: "public",
    title: "에델바이스 꽃말이3 ㅇㅇㅇㅇㅇㅇ",
    tags: ["태그", "길면", "두줄"],
    place: "인천앞바다",
    date: "24.01.19",
    like: 120,
    comment: 3,
  },
  {
    titImg: "https://picsum.photos/id/233/200/300",
    id: "",
    name: "달봉이아들",
    type: "public",
    title: "에델바이스 꽃말이3 ㅇㅇㅇㅇㅇㅇ",
    tags: ["태그", "길면", "두줄"],
    place: "인천앞바다",
    date: "24.01.19",
    like: 120,
    comment: 3,
  },
  {
    titImg: "https://picsum.photos/id/233/200/300",
    id: "",
    name: "달봉이아들",
    type: "public",
    title: "에델바이스 꽃말이3 ㅇㅇㅇㅇㅇㅇ",
    tags: ["태그", "길면", "두줄"],
    place: "인천앞바다",
    date: "24.01.19",
    like: 120,
    comment: 3,
  },
];
const Content2 = () => {
  const [btnState, setBtnState] = useState("public");

  const handleButtonClick = button => {
    setBtnState(button);
  };
  return (
    <PostList>
      <PostListHeader>
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
            <input type="text" placeholder="태그 혹은 제목을 입력해 주세요" />
          </SearchBar>
          <SortToggle>
            <div>공감순</div>
            <ul>
              <li>성적순</li>
              <li>행복순</li>
            </ul>
          </SortToggle>
        </PHeaderBottom>
      </PostListHeader>
      <PostListBody>
        <ul>
          {datas.map((data, index) =>
            btnState === "public"
              ? data.type === btnState && (
                  <PostListLi key={index}>
                    <TitImg>
                      <img src={data.titImg} alt="이미지" />
                    </TitImg>
                    <NameType>
                      <span>{data.name}</span> |{" "}
                      <span>{data.type === "public" ? "공개" : "비공개"}</span>
                    </NameType>
                    <PostTit>{data.title}</PostTit>
                    <PostTags>
                      {data.tags.map(tg => (
                        <span>#{tg}</span>
                      ))}
                    </PostTags>
                    <PlaceLike>
                      <PlaceDate>
                        <span>{data.place}</span> · <span>{data.date}</span>
                      </PlaceDate>
                    </PlaceLike>
                  </PostListLi>
                )
              : data.type === btnState && (
                  <PostListLi key={index}>
                    <NameType>
                      <span>{data.name}</span> |{" "}
                      <span>{data.type === "public" ? "공개" : "비공개"}</span>
                    </NameType>
                    <PostTit>{data.title}</PostTit>

                    <PlaceLike>
                      <PlaceDate>
                        <span>{data.place}</span> · <span>{data.date}</span>
                      </PlaceDate>
                    </PlaceLike>
                  </PostListLi>
                ),
          )}
        </ul>
      </PostListBody>
      <MoreButton />
    </PostList>
  );
};

const PostList = styled.div`
  max-width: 1540px;
  margin: auto;
`;

const PostListHeader = styled.div``;

const PHeaderBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
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
  div {
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

const PostListBody = styled.div`
  ul {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`;
const PostListLi = styled.li`
  list-style-type: none;
  width: calc((100% / 4) - (60px / 4));
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 12px;
`;
const TitImg = styled.div`
  aspect-ratio: 335/335 auto;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 20px;
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
`;

const NameType = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
  color: #b8b8b8;

  span:nth-child(1) {
    color: #262626;
  }
`;

const PostTit = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -3%;
  margin-bottom: 10px;
`;

const PostTags = styled.div`
  font-size: 14px;
  color: #b8b8b8;
  font-weight: 400;
  line-height: 17px;
  margin-bottom: 25px;
`;

const PlaceLike = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PlaceDate = styled.div`
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -3%;
  color: #282828;
`;

export default Content2;
