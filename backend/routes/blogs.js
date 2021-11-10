const router = require('express').Router();
const mongoose = require('mongoose');
const Blog = mongoose.model('Blog', require('../schemas/blog.schemas'));
const upload = require('../middleware/upload');

const port = process.env.PORT || 4000;
let url = 'http://localhost:';
if (process.env.NODE_ENV === 'production')
  url = 'https://save-environment-iittp.herokuapp.com';
else url = `http://localhost:${port}`;

router.route('/').get((request, response) => {
  Blog.find((error, blogs) => {
    if (error) {
      console.log(error);
    } else {
      response.json(blogs);
    }
  });
});

// fetching a blog through a unique id
router.route('/:id').get((request, response) => {
  let id = request.params.id;
  Blog.findById(id, (error, blog) => {
    console.log(blog);
    response.json(blog);
  });
});

// add the blog to the database
router.route('/saveBlog').post((request, response) => {
  console.log(request.body);
  let blog = new Blog(request.body);
  blog
    .save()
    .then((blog) => {
      response.status(200).json({ blog: 'blog added successfully' });
    })
    .catch((error) => {
      response.status(400).send('adding new blog failed');
    });
});

router.route('/uploadImage').post(upload.single('file'), (req, res) => {
  try {
    if (!req.file) return res.status(404).json('file not found');

    const imageURL = `${url}/blogs/uploadImage/${req.file.filename}`;
    res.status(200).json(imageURL);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
