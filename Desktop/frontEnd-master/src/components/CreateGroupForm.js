import { useState } from "react";
import styled from "styled-components";
import FileInput from "./FileInput";
import ToggleButton from "./ToggleButton";
import { createReview } from "../api";
const INITIAL_VALUES = {
  name: '',
  introduction: '',
  isPublic: false,
  imgUrl: "/assets/images/group1.svg",
  password: '',
};

function CreateGroupForm(onAddGroup) {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [isPublic, setIsPublic] = useState(false);
  const [introduction,setIntroduction]=useState("");
  const [password,setPassword]=useState("");
  const [imgUrl,setImgUrl]=useState("/assets/images/group1.svg");
  const [name, setName]=useState("");

  const handleFileChange = (fileURL) => {
    handleChange('imgUrl', fileURL);
  };

  const handleToggleBtn = (newState)=>{
    setIsPublic(newState);
    handleChange('isPublic', newState);
  }

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = async (e) => {
    e.prventDefault();
    const newGroup = {
      id: Math.random().toString(36).substr(2, 9), // 고유 ID 생성
      imageUrl: values.imgUrl,
      title: values.name,
      Dday: `D+${Math.floor(Math.random() * 365)}`, // 예시 D-day 생성
      Public: values.isPublic ? "public" : "private",
      text: values.introduction,
      badgeCount: 0,
      memoryCount: 0,
      likes: 0,
    };
    onAddGroup(newGroup);
    /*setIntroduction();
    setImgUrl();
    setIsPublic();
    setPassword();
    setName();*/
    setValues(INITIAL_VALUES);
};


  return (
    <form onSubmit={handleSubmit}>
      <TitleContainer>
        <Title>그룹 만들기</Title>
      </TitleContainer>
      <RepresentativeImgContainer>
        <GroupInfo>
          <label htmlFor="title" style={{ display: "block" }}>
            그룹명
          </label>
          <textarea name="name" id="title" value={values.name} onChange={handleInputChange}></textarea>
        </GroupInfo>
        <RepresentativeImgText>대표 이미지</RepresentativeImgText>
        <FileInput onFileChange={handleFileChange} />
        <GroupInfo>
          <label htmlFor="info" style={{ display: "block" }}>
            그룹 소개
          </label>
          <StyledTextarea
            name="introduction"
            value={values.introduction}
            onChange={handleInputChange}
            placeholder="그룹을 소개해 주세요"
          />
        </GroupInfo>
        <GroupInfo>
          <label htmlFor="groupIntro" style={{ display: "block" }}>
            그룹 공개 선택
          </label>
          <GroupOpen>
            <p>공개</p>
            <ToggleButton onToggleChange={handleToggleBtn}/>
          </GroupOpen>
        </GroupInfo>
        <GroupInfo>
          <label htmlFor="createpassword" style={{ display: "block" }}>
            비밀번호 생성
          </label>
          <CreatePassword
            name="password"
            value={values.password}
            onChange={handleInputChange}
            placeholder="그룹 비밀번호를 생성해 주세요"
            type="password"
          />
        </GroupInfo>
        <SubmitButton type="submit">만들기</SubmitButton>
      </RepresentativeImgContainer>
    </form>
  );
}

export default CreateGroupForm;

const RepresentativeImgContainer = styled.div`
  width: 400px;
  height: 50px;
  margin-top: 60px;
`;

const RepresentativeImgText = styled.p`
  width: 75px;
  height: 20px;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 600;
  line-height: 20.03px;
  letter-spacing: -0.03em;
  white-space: nowrap;
  padding-bottom: 10px;
  margin-top: 40px;
`;

const GroupInfo = styled.div`
  margin-top: 40px;
  label {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 600;
  }
  textarea{
    resize: none;
    width:100%;
    height:45px;
    border: 1px solid #dddddd;
    border-radius: 6px;
    outline: none;
    line-height: 300%;
    text-indent: 1em;
  }
`;

const StyledTextarea = styled.textarea`
  width: 400px;
  height:45px;
  resize: none;
  border: 1px solid #dddddd;
  border-radius: 6px;
  outline: none;
  line-height: 300%;
  text-indent: 1em;

  &::placeholder {
    color: #b8b8b8;
  }
`;

const GroupOpen = styled.div`
  display: flex;
  gap: 25px;
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 100%;
  color: white;
  background-color: black;
  border-radius: 6px;
  margin-top: 60px;
  cursor: pointer;
`;

const CreatePassword = styled.input`
  width: 400px;
  height:45px;
  resize: none;
  border: 1px solid #dddddd;
  border-radius: 6px;
  outline: none;
  line-height: 300%;
  text-indent: 1em;

  ::placeholder {
    color: white;
  }
`;

const Title = styled.p`
  width: 113px;
  height: 30px;
  font-family: Spoqa Han Sans Neo;
  font-size: 24px;
  font-weight: 700;
  line-height: 30.05px;
  letter-spacing: -0.03em;
  text-align: center;
  white-space: nowrap;
`;

const GroupNameContainer = styled.div`
  width: 400px;
  height: 75px;
  display: flex;
  flex-direction: column;
`;

const GroupNameText = styled.p`
  width: 44px;
  height: 20px;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 600;
  line-height: 20.03px;
  letter-spacing: -0.03em;
  white-space: nowrap;
  padding-bottom: 10px;
`;

const GroupNameInput = styled.input`
  width: 400px;
  height: 45px;
  border-radius: 6px;
  border: 1px solid black;
  outline: none;
  padding-left: 20px;
  box-sizing: border-box;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
