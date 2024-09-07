import styled from "styled-components";
import { useState,useEffect } from "react";
import SmallFlower from "../images/SmallFlower.svg";
import { Link, useParams } from "react-router-dom";

const GroupList = ({ items,sortOption,btnState }) => {
  const {id} =useParams();
  const [isPublicActive, setIsPublicActive] = useState(true);
  const [sortedItems, setSortedItems] = useState([]);

  const filteredItems = sortedItems.filter(item =>
    btnState === "public" ? item.Public === "public" : item.Public === "private"
  );

  useEffect(() => {
    // 정렬 로직
    const sorted = [...items].sort((a, b) => {
      switch (sortOption) {
        case 'Latest':
          return new Date(b.date) - new Date(a.date);  // 최신순
        case 'MostPost':
          return b.memoryCount - a.memoryCount;  // 게시글 많은순
        case 'empathy':
          return b.likes - a.likes;  // 공감순
        case 'MostBadge':
          return b.badgeCount - a.badgeCount;  // 획득 배지순
        default:
          return 0;
      }
    });

    setSortedItems(sorted);
  }, [items, sortOption]);

  return (
    <GridContainer>
      {filteredItems.map(card => (
        <Card key={card.id}>
          <Link
            to={`/groups/${card.id}`}
            key={card.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <CardImg src={card.imageUrl} alt={card.title} />
            <CardInfo>
              <Flexbox>
                <Dday>{card.Dday}</Dday>
                <Bar>|</Bar>
                <PublicPrivate>{card.Public === "public" ? "공개" : "비공개"}</PublicPrivate>
              </Flexbox>
              <CardContent>
                <CardTitle>{card.title}</CardTitle>
                <Cardtext>{card.text}</Cardtext>
              </CardContent>
              <UserFlexbox>
              <Flexbox2>
                  <BadgeCount>획득 배지</BadgeCount>
                  <p>{card.badgeCount}</p>
                </Flexbox2>
                <Flexbox2>
                  <MemoryCount>추억</MemoryCount>
                  <p>{card.memoryCount}</p>
                </Flexbox2>
                <Flexbox2>
                  <GroupLikes>그룹 공감</GroupLikes>
                  <p>
                    <img src={SmallFlower} alt="꽃" />
                    {card.likes}k
                  </p>
                </Flexbox2>
              </UserFlexbox>
            </CardInfo>
          </Link>
        </Card>
      ))}
    </GridContainer>
  );
};

export default GroupList;

const GridContainer = styled.div`
  width: 100%;
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
  height: auto;
  padding-bottom: 20px;
`;

const CardImg = styled.img`
  width: 335px;
  height: auto;
  display: block;
  padding: 18px;
`;

const CardTitle = styled.p`
  font-family: "Spoqa Han Sans Neo";
  font-weight: 700;
  font-size: 16px;
  font-style: normal;
  line-height: 20px;
  letter-spacing: -0.03em;
  color: #282828;
  padding-top: 20px;
  padding-bottom: 10px;
  margin: 0;
`;

const Cardtext = styled.p`
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.03em;
  color: #282828;
  width: 350px;
  margin: 0;
`;

const CardContent = styled.div`
  width: 335px;
`;

const CardInfo = styled.div`
  width: 335px;
  height: 166px;
  padding: 0 18px;
`;

const Dday = styled.div`
  width: 41px;
  font-family: "Spoqa Han Sans Neo";
  font-weight: 400;
  padding-bottom: 18px;
  font-size: 14px;
`;

const PublicPrivate = styled.div`
  width: 40px;
  font-family: "Spoqa Han Sans Neo";
  font-weight: 400;
  padding-bottom: 18px;
  font-size: 14px;
  white-space: nowrap;
  color: #8d8d8d;
`;

const Bar = styled.div`
  width: 4px;
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 400;
`;

const Flexbox = styled.div`
  width: 91px;
  height: 18px;
  display: flex;
  gap: 10px;
`;

const UserFlexbox = styled.div`
  width: 199px;
  display: flex;
  gap: 40px;
  margin-top: 25px;
`;

const BadgeCount = styled.p`
  width: 46px;
  font-size: 12px;
  font-weight: 400;
  white-space: nowrap;
  color: #b8b8b8;
`;

const MemoryCount = styled.p`
  width: 22px;
  font-size: 12px;
  font-weight: 400;
  white-space: nowrap;
  color: #b8b8b8;
`;

const GroupLikes = styled.p`
  width: 51px;
  font-size: 12px;
  font-weight: 400;
  white-space: nowrap;
  color: #b8b8b8;
`;

const Flexbox2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
   p {
    margin: 0; /* p 요소의 기본 마진을 제거 */
  }
`;