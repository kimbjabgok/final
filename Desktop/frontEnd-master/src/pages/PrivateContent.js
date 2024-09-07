import styled from "styled-components";
import FlowerImg from "../images/SmallFlower.svg";

const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  box-sizing: border-box;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid #dddddd;
  border-radius: 12px;
  height: 156px;
`;

const CardTitle = styled.p`
  font-family: "Spoqa Han Sans Neo";
  font-weight: 700;
  font-size: 16px;
  font-style: normal;
  line-height: 20px;
  letter-spacing: -0.03em;
  color: #282828;
  padding-bottom: 10px;
  margin: 0;
  padding-top: 20px;
`;

const CardContent = styled.div`
  width: 335px;
  height: 70px;
`;

const CardInfo = styled.div`
  width: 335px;
  height: 166px;
  padding: 0 18px;
`;

const Dday = styled.div`
  width: 41px;
  height: 18px;
  font-family: "Spoqa Han Sans Neo";
  font-weight: 400;
  padding-bottom: 18px;
  font-size: 14px;
`;

const PublicPrivate = styled.div`
  width: 40px;
  height: 18px;
  font-family: "Spoqa Han Sans Neo";
  font-weight: 400;
  padding-bottom: 18px;
  font-size: 14px;
  white-space: nowrap;
  color: #8d8d8d;
`;

const Bar = styled.div`
  width: 4px;
  height: 18px;
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 400;
`;

const Flexbox = styled.div`
  width: 91px;
  height: 18px;
  display: flex;
  gap: 10px;
  padding-top: 20px;
`;

const UserFlexbox = styled.div`
  width: 199px;
  height: 38px;
  display: flex;
  gap: 40px;
`;

const UserFlexbox1 = styled.div`
  width: 22px;
  height: 38px;
  display: flex;
  flex-direction: column;
`;

const UserFlexbox2 = styled.div`
  width: 51px;
  height: 38px;
  display: flex;
  flex-direction: column;
`;

const UserFlexbox3 = styled.div`
  width: 55px;
  height: 18px;
  display: flex;
  gap: 3px;
`;

const Memory = styled.p`
  width: 22px;
  height: 38px;
  font-size: 12px;
  font-weight: 400;
  white-space: nowrap;
  color: #b8b8b8;
`;

const MemoryCount = styled.p`
  width: 9px;
  height: 18px;
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.53px;
  letter-spacing: -0.03em;
`;

const GroupLikes = styled.p`
  width: 51px;
  height: 38px;
  font-size: 12px;
  font-weight: 400;
  white-space: nowrap;
  color: #b8b8b8;
`;

const GroupLikesCount = styled.p`
  width: 28px;
  height: 18px;
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.53px;
  letter-spacing: -0.03em;
`;

const Flower = styled.div`
  width: 18px;
  height: 18px;
  background-image: url(${FlowerImg});
  background-repeat: no-repeat;
`;

const PrivateGroupList = ({ items }) => {
  return (
    <GridContainer>
      {items.map(card => (
        <Card key={card.id}>
          <CardInfo>
            <Flexbox>
              <Dday>{card.Dday}</Dday>
              <Bar>|</Bar>
              <PublicPrivate>{card.Public}</PublicPrivate>
            </Flexbox>
            <CardContent>
              <CardTitle>{card.title}</CardTitle>
            </CardContent>
            <UserFlexbox>
              <UserFlexbox1>
                <Memory>추억</Memory>
                <MemoryCount>8</MemoryCount>
              </UserFlexbox1>
              <UserFlexbox2>
                <GroupLikes>그룹 공감</GroupLikes>
                <UserFlexbox3>
                  <Flower />
                  <GroupLikesCount>1.5k</GroupLikesCount>
                </UserFlexbox3>
              </UserFlexbox2>
            </UserFlexbox>
          </CardInfo>
        </Card>
      ))}
    </GridContainer>
  );
};

export default PrivateGroupList;
