// implementing Node.js / Express server
const express = require('express');
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
app.use('/users', usersRouter);
app.use('/blogs', blogsRouter);

app.listen(port, () => {
  console.log('Server is running on Port: ' + port);
});
