const getReviewsData = function (data) {
  if (data.length === 0) {
    return {};
  }

  const reviews = data.map(data=> {
    return {
      id: data.id,
      rating: data.rating,
      recommended: data.recommended,
      subject: data.subject,
      isHelpful: data.is_helpful,
      isNotHelpful: data.is_not_helpful,
      experience: {
        playExperience: data.play_experience,
        difficulty: data.difficulty,
        value: data.value,
        buildTime: data.build_time,
      },
      user: {
        name: data.name,
        age: data.age
      }
    };
  });

  return {
    productName: data[0].product_name,
    count: reviews.length,
    reviews
  };
};

module.exports = {
  getReviewsData,
}