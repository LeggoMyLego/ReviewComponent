const Promise = require('bluebird');

/*
data
------
names: 100 entries - {name, age}
products: 5 entries - {name}
experiences: 5 entries - {play_experience: 4, difficulty: 4, value: 5, build_time: 5}
reviews: 5 entries - {
  rating: 5,
  recommended: 1,
  subject: 'lorum ipsum 1',
  is_helpful: 5,
  is_not_helpful: 1,
  product_id: 1,
  experience_id: 1,
  user_id: 1
},
images: 5 entries - {url: 'https://aws.s3/1', review_id: 1}
*/

const addUsers = async (users, db) => {
  await Promise.map(users, (user) => db.connection.query('INSERT INTO users (name, age) VALUES (?, ?)', [user.name, user.age]));
};

const addProducts = async (products, db) => {
  await Promise.map(products, (product) => db.connection.query('INSERT INTO products (name) VALUES (?)', [product.name]));
};

const addReviews = async (reviews, productId, db) => {
  const queryString = 'INSERT INTO reviews (rating, recommended, subject, is_helpful, is_not_helpful, experience_id, user_id, created_at, description, product_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const texts = [`Loved building this ship! I'm a huge fan of Star Wars so building the classic Tantive IV was a great experience. It's amazing the amount of detail they put into the design. The carrying handle is especially useful for moving since it is a good sized model. The only negative I had from the build was the engines, as there were 9 of them they got tedious to do after a few. And it is a bit expensive compared to other models of similar size.
  `, `Really nice addition to my collection. Well worth the price considering it came with the poster and battle of hoth set. Built myself a custom stand for display. Cant wait for the next big set in Oct. Hopefully Star destroyer.`, 
  `Well I have to say, I was on the fence about this set until I walked by the Lego store on May the 4th and realized I may have been caught little off guard at the site of this thing...it was HUGE! It was Awesome! It was Star Wars Day!...so who was I kidding? So I grabbed the box off the shelf, got that sweet mini build of Hoth for free and a ‘dark side’ free poster. Double vip points? Heck YeaH! Pleasantly surprised how nice a set this was, the build was fun highly detailed and in my opinion, probably the best version of the Tantive lV ever produced by Lego. There were only a few modifications I made to this set but heck that’s half the fun sometimes. First mod I added greebling inside the thruster pack with pieces already extra in the set with a few of my own. Second I added a UCS stand because it deserves it. And third I made a stand for all the awesome minifigs(so happy to get the exclusive new figs!) All and all I’m not surprised this set is on back order because it is so worth getting! Thanks Lego Dudes!`
]
    // 'Well I have to say, I was on the fence about this set until I walked by the Lego store on May the 4th and realized I may have been caught little off guard at the site of this thing...it was HUGE! It was Awesome! It was Star Wars Day!...so who was I kidding? So I grabbed the box off the shelf, got that sweet mini build of Hoth for free and a ‘dark side’ free poster. Double vip points? Heck YeaH! Pleasantly surprised how nice a set this was, the build was fun highly detailed and in my opinion, probably the best version of the Tantive lV ever produced by Lego. There were only a few modifications I made to this set but heck that’s half the fun sometimes. First mod I added greebling inside the thruster pack with pieces already extra in the set with a few of my own.' `Second I added a UCS stand because it deserves it. And third I made a stand for all the awesome minifigs(so happy to get the exclusive new figs!) All and all I’m not surprised this set is on back order because it is so worth getting! Thanks Lego Dudes!`, 'Have been waiting for this since Lego started making Star Wars products! And have to say wasn’t disappointed, amazingly well thought out, fun to build, faithful reproduction & a great size that isn’t too big to display!!! Couldn’t be happier with the finished piece!!!! Thanks again Lego!!!', 'Really nice addition to my collection. Well worth the price considering it came with the poster and battle of hoth set. Built myself a custom stand for display. Cant wait for the next big set in Oct. Hopefully Star destroyer.', `Loved building this ship! I'm a huge fan of Star Wars so building the classic Tantive IV was a great experience. It's amazing the amount of detail they put into the design. The carrying handle is especially useful for moving since it is a good sized model. The only negative I had from the build was the engines, as there were 9 of them they got tedious to do after a few. And it is a bit expensive compared to other models of similar size.`

  await Promise.map(reviews, (review) => {
    let randHelp = Math.random() * 100;
    let randText = Math.floor(Math.random() * 3); 
    console.log(randHelp);
    const values = [
      review.rating,
      review.recommended,
      review.subject,
      review.is_helpful + randHelp,
      review.is_not_helpful + randHelp,
      review.experience_id,
      review.user_id,
      review.created_at,
      texts[randText],
      productId,
    ];
    return db.connection.query(queryString, values);
  });
};

const addExperiences = async (experiences, db) => {
  const queryString = 'INSERT INTO experiences (play_experience, difficulty, value, build_time) VALUES (?, ?, ?, ?)';
  await Promise.map(experiences, (experience) => {
    const values = [
      experience.play_experience,
      experience.difficulty,
      experience.value,
      experience.build_time,
    ];
    return db.connection.query(queryString, values);
  });
};

const addImages = async (images, db) => {
  const queryString = 'INSERT INTO images (url, review_id) VALUES (?, ?)';
  await Promise.map(images, (image) => {
    const values = [image.url, image.review_id];
    return db.connection.query(queryString, values);
  });
};

module.exports = {
  addUsers,
  addProducts,
  addReviews,
  addExperiences,
  addImages,
};
