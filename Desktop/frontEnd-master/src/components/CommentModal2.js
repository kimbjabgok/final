import React, { useState } from "react";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import MainContent from "./MainContent";
import CommentModal from "./CommentModal";
import PostComment from "./PostComment";
import Commentedit from "../assets/images/edit.svg";
import Commentdelete from "../assets/images/delete.svg";
import EditComment from "./EditComment";
import DeleteComment from "./DeleteComment";
const Modal2 = ({onAddComment}) => {
  const [isUpLoadModalOpend, setIsUpLoadModalOpend] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleUpLoadModalClick = content => {
    setModalContent(content);
    setIsUpLoadModalOpend(true);
  };

  return (
    <div>
      {isUpLoadModalOpend && (
        <CommentModal
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
              marginTop: "10px",
              marginBottom: "60px",
              textAlign: "center",
              fontWeight: "700",
            }}
          >
            {modalContent === "comment"
              ? "댓글 등록"
              : modalContent === "edit"
                ? "댓글 수정"
                : "댓글 삭제"}
          </h3>
          {modalContent === "comment" && <PostComment onAddComment={(newComment)=>{
            onAddComment(newComment);
            setIsUpLoadModalOpend(false);
          }} />}
          {modalContent === "edit" && <EditComment />}
          {modalContent === "delete" && <DeleteComment />}
        </CommentModal>
      )}

      <PHeaderTopBtn onClick={() => handleUpLoadModalClick("comment")}>
        댓글 등록하기
      </PHeaderTopBtn>
    </div>
  );
};

const PHeaderTopBtn = styled.button`
  right: 170px;
  width: 200px;
  padding: 14px;
  border: none;
  background: #282828;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  border-radius: 6px;
  cursor:pointer;
`;
const CommentEditBtn = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
`;

const CommentDeleteBtn = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
`;
export default Modal2;
