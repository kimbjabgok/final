import SecondNav from "../components/SecondNav";
import PrivateGroupList from "./PrivateContent";
import styled from "styled-components";
import items from "../mock.json";
import CreateGroupForm from "../components/CreateGroupForm";

const GroupContainer2 = styled.div`
  margin-top: 20px;
  padding: 0 180px;
`;

const PrivateGroupPage = () => {
  return (
    <>
      <SecondNav />
      <GroupContainer2>
        <PrivateGroupList items={items} />
      </GroupContainer2>
      <CreateGroupForm />
    </>
  );
};

export default PrivateGroupPage;
