import React, { useState } from "react";
import styled from "styled-components";
const PostComment = ({onAddComment}) => {
  const [nickname,setNickname]=useState("");
  const [comment, setComment]=useState("");
  const [commentpassword,setCommentpassword]=useState("");

  const handleNicknameChange=e=>{
    setNickname(e.target.value);
  }
  const handleCommentChange=e=>{
    setComment(e.target.value);
  }
  const handlePasswordChange=e=>{
    setCommentpassword(e.target.value);
  }

  const handleSubmit= e =>{
    e.preventDefault();
    const newComment = {
      nickname,
      comment,
      commentpassword,
    };
    if (!nickname || !comment) {
      alert("닉네임과 댓글을 입력해 주세요!");
      return;
    }
    onAddComment(newComment);
    setNickname("");
    setComment("");
    setCommentpassword("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="groupName" style={{ display: "block" }}>
            닉네임
          </label>
          <input
            type="text"
            value={nickname}
            placeholder="닉네임을 입력해 주세요"
            onChange={handleNicknameChange}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="groupIntro" style={{ display: "block" }}>
            댓글
          </label>
          <textarea
            name="comment"
            value={comment}
            placeholder="댓글을 입력해 주세요"
            onChange={handleCommentChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="check" style={{ display: "block" }}>
            비밀번호 생성
          </label>
          <input
            placeholder="그룹 비밀번호를 입력해 주세요"
            type="password"
            value={commentpassword}
            onChange={handlePasswordChange}
          />
        </FormGroup>
        <PostButton>등록하기</PostButton>
      </form>
    </>
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
const PostButton = styled.button`
  width: 100%;
  border: none;
  color: #fff;
  background: #282828;
  margin-top: 60px;
  padding: 15px;
  font-size: 16px;
  cursor: pointer;
`;

// 스타일
const CommentList = styled.ul`
  margin-top: 20px;
`;

const CommentItem = styled.li`
  margin-bottom: 20px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  strong {
    font-size: 16px;
    margin-right: 10px;
  }
  p {
    font-size: 14px;
    margin: 0;
  }
`;

export default PostComment;
