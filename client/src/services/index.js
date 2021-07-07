const getReviews = (productId, filters) => {
  const apiUrl = `/api/products/${productId}/reviews`;
  const url = new URL(apiUrl, process.env.HOST_URL);
  if (filters) {
    url.search = new URLSearchParams(filters).toString();
  }

  return new Promise(async (resolve, reject) => {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      credentials: 'same-origin',
    });

    resolve(res.json());
  });
};
  
const getReview = async (reviewId, productId) => {
  const apiUrl = `/api/products/${productId}/reviews/${reviewId}`;

  const res = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    credentials: 'same-origin'
  });
  return res.json();
};

const sendVote = async(reviewId, productId, data) => {
  const apiUrl = `/api/products/${productId}/reviews/${reviewId}`;

  const res = await fetch(apiUrl, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    credentials: 'same-origin',
    body: JSON.stringify(data)
  });
  return res.json();
};




export default { getReviews, sendVote, getReview };