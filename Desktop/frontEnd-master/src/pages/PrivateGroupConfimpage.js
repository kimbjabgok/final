import styled from "styled-components";
import Button from "../components/Button";

const PrivateGroupConfirm = () => {
  return (
    <ConfirmContainer>
      <h1>비공개 그룹</h1>
      <h2>비공개 그룹에 접근하기 위해 권한 확인이 필요합니다.</h2>
      <p>비밀번호 입력</p>
      <PasswordEnter type="text" placeholder="그룹 비밀번호를 입력해주세요" />
      <Button size="large">제출하기</Button>
    </ConfirmContainer>
  );
};

const ConfirmContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 284px;
  gap: 10px;

  h1 {
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 10px;
  }

  h2 {
    font-weight: 400;
    font-size: 14px;
  }

  p {
    font-weight: 500;
    font-size: 16px;
    margin-top: 50px;
    padding-right: 300px;
  }
`;

const PasswordEnter = styled.input`
  margin-bottom: 50px;
  width: 400px;
  height: 45px;
  outline: none;
  border: 1px solid #dddddd;
  border-radius: 6px;

  &::placeholder {
    color: #b8b8b8;
    text-indent: 1em;
  }
`;
export default PrivateGroupConfirm;
