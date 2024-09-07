import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../components/Modal";
import badge1 from "../assets/images/badge1.svg"
import badge2 from "../assets/images/badge2.svg"
import badge3 from "../assets/images/badge3.svg"
import family from "../assets/images/img2.svg"

const GroupCard = () => {
  const [isModalOpend, setIsModalOpend] = useState(false);
  const [fileName, setFileName] = useState("");
  const [isDelModalOpend, setIsDelModalOpend] = useState(false);

  //api 연동 후 바꿔줄 것

  //api 연동 후 바꿔줄 것

  const handleFileChange = event => {
    const file = event.target.files[0]; // 선택된 파일을 가져옵니다.
    if (file) {
      setFileName(file.name); // 파일명이 있으면 상태를 업데이트합니다.
    } else {
      setFileName(""); // 파일이 선택되지 않으면 상태를 초기화합니다.
    }
  };

  const modifyBtnClick = () => {
    setIsModalOpend(true);
  };

  const groupDelBtnClick = () => {
    setIsDelModalOpend(true);
  };

  return (
    <Container>
      {isModalOpend && (
        <Modal
          setIsOpend={setIsModalOpend}
          styles={{
            backgroundColor: "#fff",
            padding: "40px",
            textAlign: "left",
          }}
        >
          <h3
            style={{
              fontSize: "24px",
              marginBottom: "60px",
              textAlign: "center",
              fontWeight: "700",
            }}
          >
            그룹 정보 수정
          </h3>
          <FormGroup>
            <label htmlFor="groupName" style={{ display: "block" }}>
              그룹명
            </label>
            <input type="text" id="groupName" />
          </FormGroup>
          <FormGroup>
            <strong>대표 이미지</strong>
            <FileUpload>
              <input
                class="upload-name"
                value={fileName}
                laceholder="첨부파일"
              />

              <label for="file">파일 선택</label>
              <input type="file" id="file" onChange={handleFileChange} />
            </FileUpload>
          </FormGroup>

          <FormGroup>
            <label htmlFor="groupIntro" style={{ display: "block" }}>
              그룹소개
            </label>
            <textarea name="groupIntro" id="groupIntro" />
          </FormGroup>
          <FormGroup>
            <GroupPriv>
              <label style={{ display: "block" }}>그룹 공개 선택</label>
              <label class="check_container">
                <input type="checkbox" id="groupPrivate" />
                <span />
              </label>
            </GroupPriv>
          </FormGroup>
          <FormGroup>
            <label htmlFor="check" style={{ display: "block" }}>
              수정 권한 인증
            </label>
            <input
              placeholder="그룹 비밀번호를 입력해 주세요"
              type="text"
              id="check"
            />
          </FormGroup>
          <ModifyButton>수정하기</ModifyButton>
        </Modal>
      )}
      {isDelModalOpend && (
        <Modal
          setIsOpend={setIsDelModalOpend}
          styles={{
            backgroundColor: "#fff",
            padding: "40px",
            textAlign: "left",
          }}
        >
          <h3
            style={{
              fontSize: "24px",
              marginBottom: "60px",
              textAlign: "center",
              fontWeight: "700",
            }}
          >
            그룹 삭제
          </h3>

          <FormGroup>
            <label htmlFor="check" style={{ display: "block" }}>
              삭제 권한 인증
            </label>
            <input
              placeholder="그룹 비밀번호를 입력해 주세요"
              type="text"
              id="check"
            />
          </FormGroup>
        </Modal>
      )}

      <MainContent>
        <MainImage src={family} alt="Family" />

        <ContentWrapper>
          <Header>
            <HeaderInfo>
              <div>
                <Date>D+265</Date>
                <Status>공개</Status>
              </div>
              <DelMody>
                <button onClick={modifyBtnClick}>그룹 정보 수정하기</button>
                <button onClick={groupDelBtnClick}>그룹 삭제하기</button>
              </DelMody>
            </HeaderInfo>
            <Title>
              달봉이네 가족 달봉이네 가족 어디까지 길어지는 거예요?? 글자수 제한
              한 줄까지
            </Title>
            <Description>
              서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다. 서로 한
              마음으로 응원하고 아끼는 달봉이네 가족입니다. 서로 한 마음으로
              응원하고 아끼는 달봉이네 가족입니다. 그냥 끝까지로 할게요 그리고
              두 줄까지만! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Qui eaque necessitatibus ex reprehenderit facilis id vero
              dolor recusandae est quam sit dignissimos cum excepturi et aliquam
              iste quae, consectetur vitae!
            </Description>
          </Header>
          <FlexBox>
            <Badges>
              <img src={badge1} alt="badge" />
              <img src={badge2} alt="badge" />
              <img src={badge3} alt="badge" />
            </Badges>
            <Actions>
              <ActionButton>공감 보내기</ActionButton>
            </Actions>
          </FlexBox>
        </ContentWrapper>
      </MainContent>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  max-width: 1560px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* 이미지와 텍스트를 수직 중앙 정렬 */
`;

const MainImage = styled.img`
  width: 30%;
  max-width: 262px;
  aspect-ratio: 262 / 273 auto;
  border-radius: 10px;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  flex: 1;
  margin-left: 20px; /* 이미지와 텍스트 사이의 간격 */
`;

const Header = styled.div`
  margin-bottom: 20px;
`;

const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Date = styled.span`
  font-size: 14px;
  color: #282828;
`;

const Status = styled.span`
  font-size: 14px;
  color: #8d8d8d;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; /* 줄바꿈을 방지 */
  /* width: 10000px; 적절한 너비 설정 */
`;

const Description = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

// const Badge = styled.div`
//   background-color: #f4f4f4;
//   padding: 8px 12px;
//   border-radius: 20px;
//   font-size: 14px;
// `;

const Actions = styled.div`
  margin-left: 20px; /* ContentWrapper와 Actions 사이의 간격 */
`;

const ActionButton = styled.button`
  width: 187px;
  padding: 16px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  background: unset;
  border: 1px solid #282828;
  cursor: pointer;
  color: #333;
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

const ModifyButton = styled.button`
  width: 100%;
  border: none;
  color: #fff;
  background: #282828;
  margin-top: 40px;
  padding: 15px;
  font-size: 16px;
`;
const DelMody = styled.div`
  button {
    margin-left: 40px;
    border: none;
    background: unset;
  }
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default GroupCard;
