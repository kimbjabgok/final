import React, { useState } from "react";
import styled from "styled-components";
const EditComment = ({initialComment, onSubmit}) => {
  const [nickname, setNickname] = useState(initialComment.nickname);
  const [comment, setComment] = useState(initialComment.comment);
  const [password, setPassword] = useState(initialComment.password);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <label htmlFor="groupName" style={{ display: "block" }}>
          닉네임
        </label>
        <input
          type="text"
          value={nickname}
          placeholder="닉네임을 입력해 주세요"
          onChange={(e)=>setNickname(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <label htmlFor="groupIntro" style={{ display: "block" }}>
          댓글
        </label>
        <textarea
          name="groupIntro"
          value={comment}
          placeholder="댓글을 입력해 주세요"
          onChange={(e)=>setComment(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="check" style={{ display: "block" }}>
          비밀번호 생성
        </label>
        <input
          placeholder="댓글 비밀번호를 입력해 주세요"
          type="text"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
      </FormGroup>
      <EditButton type="submit">수정하기</EditButton>
    </form>
  );
};

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
    resize: none;
    font-size: 14px;
    text-indent: 1em;
    line-height: 40px;
  }
  strong {
    display: block;
    margin-bottom: 10px;
    font-weight: 500;
  }
`;
const EditButton = styled.button`
  width: 100%;
  border: none;
  color: #fff;
  background: #282828;
  margin-top: 60px;
  padding: 15px;
  font-size: 16px;
`;

export default EditComment;
