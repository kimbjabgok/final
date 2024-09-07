import React, { useState } from "react";
import styled from "styled-components";

const FileInputContainer = styled.div`
  display: flex;
  height: 45px;
  align-items: center;
  gap: 10px;
`;

const FileLabel = styled.label`
  width: 30%;
  height: 100%;
  background-color: white;
  border: 1px solid black;
  border-radius: 6px;
  cursor: pointer;
  text-align: center;
  line-height: 260%;
`;

const FileName = styled.div`
  width: 70%;
  height: 100%;
  border: 1px solid #dddddd;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 400;
  color: #b8b8b8;
  font-family: Spoqa Han Sans Neo;
  line-height: 300%;
  text-indent: 1em;
`;

const HiddenInput = styled.input`
  display: none;
`;

const FileInput = ({onFileChange}) => {
  const [fileName, setFileName] = useState("파일을 선택해 주세요");

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
    const fileUrl=URL.createObjectURL(file);
    onFileChange(fileUrl);
  };

  return (
    <FileInputContainer>
      <FileName>{fileName}</FileName>
      <FileLabel htmlFor="file-upload">파일 선택</FileLabel>
      <HiddenInput id="file-upload" type="file" onChange={handleFileChange} />
    </FileInputContainer>
  );
};

export default FileInput;
