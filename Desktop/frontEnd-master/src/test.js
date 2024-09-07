import React from 'react';

const ServerTestButton = () => {
  const handleTestRequest = async () => {
    const URL = 'https://backend-w1la.onrender.com/api/groups'; // 테스트할 서버의 URL
    const data = {
      name: '테스트 그룹',
      password: 'testpassword',
      imageUrl: 'https://example.com/image.jpg', // 파일 URL 대신 테스트용 URL 사용
      isPublic: true,
      introduction: '이것은 테스트 그룹입니다.'
    };

    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // 필요 시 인증 헤더 추가
          // 'Authorization': `Bearer ${yourToken}`
        },
        body: JSON.stringify(data)  // JSON 형식으로 데이터를 서버에 전송
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`서버 오류: ${response.status} - ${errorData.message}`);
      }

      const result = await response.json();
      alert(`서버 응답: ${JSON.stringify(result, null, 2)}`);
    } catch (error) {
      alert(`서버 요청 중 오류 발생: ${error.message}`);
    }
  };

  return (
    <div>
      <button onClick={handleTestRequest}>서버 테스트 요청</button>
    </div>
  );
};

export default ServerTestButton;