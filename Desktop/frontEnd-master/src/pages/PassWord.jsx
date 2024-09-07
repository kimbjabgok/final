import React from "react";
import styled from "styled-components";

const PassWord = () => {
  return (
    <Content>
      <PassBox>
        <TextIntro>
          <h3 stlye={{ fontSize: "20px" }}>비공개 추억</h3>
          <p style={{ fontSize: "14px" }}>
            비공개 추억에 접근하기 위해 권한확인이 필요합니다.
          </p>
        </TextIntro>
        <FormGroup>
          <label htmlFor="groupName" style={{ display: "block" }}>
            비밀번호 입력
          </label>
          <input
            type="text"
            id="groupName"
            placeholder="추억 비밀번호를 입력해 주세요"
          />
        </FormGroup>
        <Submitbutton>제출하기</Submitbutton>
      </PassBox>
    </Content>
  );
};

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
`;
const PassBox = styled.div`
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const TextIntro = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;
const Submitbutton = styled.div`
  width: 400px;
  background: #282828;
  color: #fff;
  padding: 15px;
  font-size: 16px;
  text-align: center;
  margin-top: 60px;
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

export default PassWord;
