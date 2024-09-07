import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #999;
`;

const FooterButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #333;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
  }
`;

const data = [
  {
    id: 1,
    title: "인천 앞바다에서 무려 60cm 활어를 낚다!",
    description: "인천 앞바다",
    image: "https://via.placeholder.com/300x200",
    date: "24.01.19 18:00",
    likes: 120,
    comments: 8,
  },
  {
    id: 2,
    title: "서울 소풍",
    description: "서울특별시",
    image: "https://via.placeholder.com/300x200",
    date: "23.05.07 18:00",
    likes: 120,
    comments: 8,
  },
];

const App = () => {
  return (
    <PageContainer>
      <CardGrid>
        {data.map(item => (
          <Card key={item.id}>
            <CardImage src={item.image} alt={item.title} />
            <CardContent>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <CardFooter>
                <div>
                  <span>{item.date}</span>
                </div>
                <div>
                  <span>❤️ {item.likes}</span>
                  <span>💬 {item.comments}</span>
                </div>
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </CardGrid>
      <FooterButton>더보기</FooterButton>
    </PageContainer>
  );
};

export default App;
