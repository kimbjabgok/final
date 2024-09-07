import styled from "styled-components";
import CreateGroupForm from "../components/CreateGroupForm";
import Nav from "../components/Nav";

const GroupCreateContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 40px;
`;

const CreateGroupPage = () => {
  return (
    <>
      <Nav />
      <GroupCreateContainer>
        <CreateGroupForm />
      </GroupCreateContainer>
    </>
  );
};

export default CreateGroupPage;
