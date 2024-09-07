import React, { useState } from "react";
import styled from "styled-components";
import UpLoadModal from "../components/UpLoadModal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import search from "../assets/images/search.svg";
import MainContent from "../components/MainContent";
import flower from "../assets/images/flower.svg";
import comment from "../assets/images/comment.svg";
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
    name: "달봉이2아들",
    type: "private",
    title: "에델바이스 꽃말이3 ㅇㅇㅇㅇㅇㅇ",
    tags: ["태그", "길면", "두줄"],
    place: "인천앞바다",
    date: "24.01.19",
    like: 120,
    comment: 3,
  },
];

const Memory = () => {
  const [btnState, setBtnState] = useState("public");
  const [isUpLoadModalOpend, setIsUpLoadModalOpend] = useState(false);
  const [fileName, setFileName] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = event => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      // 중복 확인: 입력 값이 배열에 존재하지 않는 경우에만 추가
      if (!items.includes(inputValue)) {
        setItems([...items, inputValue]); // 배열에 새 값 추가
      }
      setInputValue(""); // 입력 필드 초기화
    }
  };

  const handleDelete = index => {
    setItems(items.filter((_, i) => i !== index)); // 해당 인덱스의 항목을 제외하고 배열 업데이트
  };

  const handleButtonClick = button => {
    setBtnState(button);
  };

  const handleUpLoadModalClick = () => {
    setIsUpLoadModalOpend(true);
  };

  const handleFileChange = event => {
    const file = event.target.files[0]; // 선택된 파일을 가져옵니다.
    if (file) {
      setFileName(file.name); // 파일명이 있으면 상태를 업데이트합니다.
    } else {
      setFileName(""); // 파일이 선택되지 않으면 상태를 초기화합니다.
    }
  };

  return (
    <div>
      {isUpLoadModalOpend && (
        <UpLoadModal
          setIsOpend={setIsUpLoadModalOpend}
          styles={{
            backgroundColor: "#fff",
            padding: "40px",
            textAlign: "left",
          }}
        >
          <h3
            style={{
              fontSize: "24px",
              marginTop: "78px",
              marginBottom: "60px",
              textAlign: "center",
              fontWeight: "700",
            }}
          >
            추억 올리기
          </h3>
          <FlexBox>
            <RightSide>
              <FormGroup>
                <label htmlFor="Name" style={{ display: "block" }}>
                  닉네임
                </label>
                <input type="text" id="Name" />
              </FormGroup>
              <FormGroup>
                <label htmlFor="Title" style={{ display: "block" }}>
                  제목
                </label>
                <input type="text" id="Title" />
              </FormGroup>
              <FormGroup>
                <strong>이미지</strong>
                <FileUpload>
                  <input
                    class="upload-name"
                    value={fileName}
                    laceholder="첨부파일"
                  />
                  <label htmlfor="file">파일 선택</label>
                  <input type="file" id="file" onChange={handleFileChange} />
                </FileUpload>
              </FormGroup>

              <FormGroup>
                <label htmlFor="MainText" style={{ display: "block" }}>
                  본문
                </label>
                <textarea name="MainText" id="MainText" />
              </FormGroup>
            </RightSide>
            <LeftSide>
              <FormGroup>
                <label htmlFor="Tag" style={{ display: "block" }}>
                  태그
                </label>
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyUp={handleKeyPress}
                  placeholder="입력 후 엔터를 눌러 추가하세요"
                />
                <ul style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
                  {items.map((item, index) => (
                    <NostelgiaList key={index}>
                      #{item}
                      <button onClick={() => handleDelete(index)}>X</button>
                    </NostelgiaList>
                  ))}
                </ul>
              </FormGroup>
              <FormGroup>
                <label htmlFor="Place" style={{ display: "block" }}>
                  추억의 장소
                </label>
                <input type="text" id="Place" />
              </FormGroup>
              <FormGroup>
                <DayMonthYear>
                  <label htmlFor="Place" style={{ display: "block" }}>
                    추억의 순간
                  </label>
                  <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    dateFormat="Pp" // 날짜와 시간 형식
                  />
                </DayMonthYear>

                {/* <input type="text" id="Date" placeholder='YYYY-MM-DD'/> */}
              </FormGroup>
              <FormGroup>
                <GroupPriv>
                  <label style={{ display: "block" }}>추억 공개 선택</label>
                  <label class="check_container">
                    <input type="checkbox" id="groupPrivate" />
                    <span />
                  </label>
                </GroupPriv>
              </FormGroup>
              <FormGroup>
                <label htmlFor="PW" style={{ display: "block" }}>
                  비밀번호 생성
                </label>
                <input type="text" id="PW" placeholder="추억 비밀번호 생성" />
              </FormGroup>
            </LeftSide>
          </FlexBox>
          <DoUpLoadBtn onClick={handleUpLoadModalClick}>올리기</DoUpLoadBtn>
        </UpLoadModal>
      )}
      <MainContent />
      <PostList>
        <PostListHeader>
          <PHeaderTop>
            <PHeaderTitle>추억 목록</PHeaderTitle>
            <PHeaderTopBtn onClick={handleUpLoadModalClick}>
              추억 올리기
            </PHeaderTopBtn>
          </PHeaderTop>
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
        <Link to="memory" style={{ textDecoration: "none", color: "inherit" }}>
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
                        <span>
                          {data.type === "public" ? "공개" : "비공개"}
                        </span>
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
                        <LikeComment>
                          <span class="fl">
                            <i /> {data.like}
                          </span>{" "}
                          <span class="comment">
                            <i /> {data.comment}
                          </span>
                        </LikeComment>
                      </PlaceLike>
                    </PostListLi>
                  )
                : data.type === btnState && (
                    <PostListLi key={index}>
                      <NameType>
                        <span>{data.name}</span> |{" "}
                        <span>
                          {data.type === "public" ? "공개" : "비공개"}
                        </span>
                      </NameType>
                      <PostTit>{data.title}</PostTit>

                      <PlaceLike>
                        <PlaceDate>
                          <span>{data.place}</span> · <span>{data.date}</span>
                        </PlaceDate>
                        <LikeComment>
                          <span class="fl">
                            <i /> {data.like}
                          </span>{" "}
                          <span class="comment">
                            <i /> {data.comment}
                          </span>
                        </LikeComment>
                      </PlaceLike>
                    </PostListLi>
                  ),
            )}
          </ul>
        </PostListBody>
        </Link>
      </PostList>
    </div>
  );
};

const PostList = styled.div`
  max-width: 1540px;
  margin: auto;
`;

const PostListHeader = styled.div``;

const PHeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const PHeaderTitle = styled.h4`
  flex-grow: 1;
  text-align: center;
  font-size: 24px;
  color: #282828;
  line-height: 30px;
  font-weight: 700;
`;
const PHeaderTopBtn = styled.button`
  position: absolute;
  right: 170px;
  width: 200px;
  padding: 14px;
  border: none;
  background: #282828;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  border-radius: 6px;
`;
const PHeaderBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
const LikeComment = styled.div`
  font-size: 14px;
  color: #8d8d8d;
  span {
    display: inline-flex;
    height: 18px;
    align-items: center;
  }
  span i {
    display: block;
    width: 18px;
    height: 100%;
    background: no-repeat center / contain;
  }
  span.fl i {
    background-image: url(${flower});
  }
  span.comment i {
    background-image: url(${comment});
  }
  span:nth-child(1) {
    margin-right: 10px;
  }
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1240px;
  margin: auto;
`;
const FormGroup = styled.div`
  margin-top: 40px;
  label {
    display: block;
    margin-bottom: 10px;
    font-weight: 500;
    line-height: 20px;
  }
  input {
    width: 100%;
    border-radius: 6px;
    padding: 14px 20px;
    box-sizing: border-box;
    font-size: 14px;
    color: #282828;
    border: 1px solid #dddddd;
  }
  textarea {
    width: 100%;
    border-radius: 6px;
    border: 1px solid #dddddd;
    height: 120px;
  }
  strong {
    display: block;
    margin-bottom: 10px;
    font-weight: 500;
    line-height: 20px;
  }
`;
const FileUpload = styled.div`
  display: flex;
  align-items: center;

  .upload-name {
    box-sizing: border-box;
    display: inline-block;
    padding: 14px 20px;
    vertical-align: middle;
    border: 1px solid #dddddd;
    flex: 1;
    color: #999999;
    width: auto;
  }
  label {
    display: inline-block;
    padding: 14px 24px;
    color: #fff;
    vertical-align: middle;
    background-color: #999999;
    font-size: 14px;
    margin-bottom: 0;
    text-align: center;
    cursor: pointer;
    margin-left: 10px;
    border: 1px solid #282828;
    box-sizing: border-box;
    background: unset;
    color: #282828;
    border-radius: 6px;
  }
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  padding: 80px;
  border-right: 1px solid #dddddd;
`;
const LeftSide = styled.div`
  width: 50%;
  padding: 80px;
`;

const DoUpLoadBtn = styled.div`
  display: block;
  width: 400px;
  background-color: #282828;
  border-radius: 6px;
  margin: auto;
  padding: 15px;
  font-size: 16px;
  color: #fff;
  text-align: center;
`;

const GroupPriv = styled.div`
  label.check_container {
    display: inline-block;
    position: relative;
    padding-left: 30px; /* 커스텀 체크박스의 크기에 따라 여백 조정 */
    cursor: pointer;
    font-size: 18px;
    user-select: none; /* 텍스트 드래그 방지 */
  }

  input[type="checkbox"]:checked + span {
    background-color: #000;
  }
  input {
    display: none;
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 24px; /* 체크박스의 높이 */
    width: 48px; /* 체크박스의 너비 */
    background-color: #ccc; /* 기본 체크박스 색상 */
    border-radius: 50px; /* 체크박스를 둥글게 만들고 싶을 때 */
    transition: all 0.5s;
  }
  span::after {
    content: "";
    position: absolute;
    display: block;
  }
  input[type="checkbox"]:checked + span:after {
    display: block;
    left: calc(100% - 22px);
  }
  span:after {
    top: 50%;
    transform: translateY(-50%);
    left: 2px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    transition: all 0.5s;
  }
`;
const DayMonthYear = styled.div`
  /* 날짜 선택기의 전체 컨테이너 스타일 */
  .react-datepicker {
    font-size: 12px; /* 전체 글꼴 크기 */
    border-radius: 10px; /* 모서리 둥글게 */
    border: 1px solid #ccc; /* 테두리 색상 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  }

  /* 날짜 선택기의 헤더 부분 스타일 */
  .react-datepicker__header {
    background-color: #ffffff; /* 헤더 배경색 */
    border-bottom: 1px solid #ddd; /* 헤더 하단 테두리 */
    font-weight: bold; /* 헤더 텍스트 굵게 */
  }

  /* 요일 스타일 */
  .react-datepicker__day-name {
    color: #888; /* 요일 색상 */
    font-weight: normal; /* 요일 텍스트 굵기 */
  }

  /* 주말 날짜 스타일 */
  .react-datepicker__day--weekend {
    color: #e74c3c; /* 주말 날짜 색상 (빨간색) */
  }

  /* 선택된 날짜 스타일 */
  .react-datepicker__day--selected {
    background-color: #3498db; /* 선택된 날짜 배경색 */
    color: #fff; /* 선택된 날짜 글자 색상 */
    border-radius: 50%; /* 선택된 날짜 모서리를 둥글게 */
  }

  /* 오늘 날짜 스타일 */
  .react-datepicker__day--today {
    font-weight: bold; /* 오늘 날짜 텍스트 굵게 */
    color: #2c3e50; /* 오늘 날짜 색상 */
  }

  /* 월 선택기 스타일 */
  .react-datepicker__month-dropdown-container,
  .react-datepicker__year-dropdown-container {
    font-size: 14px; /* 월/년 선택기의 글꼴 크기 */
  }
`;

const NostelgiaList = styled.li`
  list-style-type: none;
  background-color: #eee;
  font-size: 14px;
  padding: 2px 4px;

  button {
    font-size: 14px;
    cursor: pointer;
    border: none;
    background-color: none;
  }
`;

export default Memory;
