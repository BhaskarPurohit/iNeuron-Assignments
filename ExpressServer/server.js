const express = require('express');
const app = express();

app.get('/posts', (req, res) => {
  const posts = generatePosts(); // Function to generate posts

  res.json(posts);
});

// Generate sample posts
function generatePosts() {
  const posts = [];

  for (let i = 1; i <= 20; i++) {
    posts.push({
      id: i,
      title: `Post ${i}`,
      body: `This is the body of Post ${i}`
    });
  }

  return posts;
}

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
