const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/blog_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define the blog schema and model
const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
});
const Blog = mongoose.model('Blog', blogSchema);

// Create a new blog post
app.post('/blogs', async (req, res) => {
  try {
    const { title, content } = req.body;
    const blog = new Blog({ title, content });
    const savedBlog = await blog.save();
    res.json(savedBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create a new blog post' });
  }
});

// Get all blog posts
app.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve blog posts' });
  }
});

// Get a single blog post by ID
app.get('/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    res.json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve the blog post' });
  }
});

// Update a blog post
app.put('/blogs/:id', async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updatedBlog) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    res.json(updatedBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update the blog post' });
  }
});

// Delete a blog post
app.delete('/blogs/:id', async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    res.json(deletedBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete the blog post' });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
