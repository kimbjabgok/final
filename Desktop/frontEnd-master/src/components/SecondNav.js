import styled from "styled-components";
import ToggleButtons from "./tab";
import Searchbox from "./search";
import Dropbox from "./Dropdown";

const Container = styled.div`
  display: flex;
  padding: 30px 180px;
`;

function SecondNav() {
  return (
    <Container>
      <ToggleButtons />
      <Searchbox />
      <Dropbox />
    </Container>
  );
}

export default SecondNav;
