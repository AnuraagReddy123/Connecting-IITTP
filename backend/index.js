// implementing Node.js / Express server
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require('dotenv').config();

const mongoose = require('mongoose');
const connection = process.env.ATLAS_URI;

mongoose
  .connect(connection, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected successfully'))
  .catch((error) => console.log(error));

const usersRouter = require('./routes/users');
const blogsRouter = require('./routes/blogs');
const foodCategoryRouter = require('./routes/foodCategory');
const shoppingCategoryRouter = require('./routes/shoppingCategory');
const homeCategoryRouter = require('./routes/homeCategory');
app.use('/users', usersRouter);
app.use('/blogs', blogsRouter);
app.use('/foodCategories',foodCategoryRouter);
app.use('/shoppingCategories',shoppingCategoryRouter);
app.use('/homeCategories',homeCategoryRouter);

if (process.env.NODE_ENV == 'production') {
  app.use(express.static('client/build'));
}

app.get('*', (req, res) => {
  res.sendFile(path.resolve(('client/build/index.html')));
});

app.listen(port, () => {
  console.log('Server is running on Port: ' + port);
});
