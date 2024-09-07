const BASE_URL = 'https://backend-w1la.onrender.com/api/groups';

export async function getReviews({
  order = 'createdAt',
  offset = 0,
  limit = 6,
}) {
  const query = `order=${order}&offset=${offset}&limi t=${limit}`;
  const response = await fetch(`${BASE_URL}`);
  if (!response.ok) {
    throw new Error('리뷰를 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}

export async function createReview(formData) {
  const response = await fetch(`${BASE_URL}`, {
    method: 'POST',
    body: formData,
  });
  if (!response.ok) {
    throw new Error('리뷰를 생성하는데 실패했습니다.');
  }
  const body = await response.json();
  return body;
}