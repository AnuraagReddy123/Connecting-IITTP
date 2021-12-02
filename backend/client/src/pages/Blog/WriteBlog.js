import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import './WriteBlog.css';
import { AuthContext } from '../../components/firebase/context';

// Page to write a blog

const port = process.env.PORT || 4000;
let url = 'http://localhost:';
if (process.env.NODE_ENV === 'production')
  url = 'https://save-environment-iittp.herokuapp.com';
else url = `http://localhost:${port}`;

export default function WriteBlog() {
  const { user } = useContext(AuthContext);
  const initialValues = {
    title: '',
    text: '',
    picture: '',
    username: '',
    createdDate: new Date(),
  };

  const [blog, setblog] = useState(initialValues);
  const [file, setFile] = useState('');
  const [image, setImage] = useState('');

  const imageUrl = blog.picture
    ? blog.picture
    : 'https://i1.wp.com/www.itsmyfavoriteday.com/wp-content/uploads/2019/09/products-that-save-money-and-good-for-environment.jpg?w=1003&ssl=1';

  const history = useHistory();

  useEffect(() => {
    const getImage =  async () => {
      if (file) {
        console.log(file);
        const data = new FormData();
        data.append('name', file.name);
        data.append('file', file);

        const image = await axios.post(`${url}/files/uploadImage`, data); // upload the image to the database
        console.log(image.data);
        blog.picture = image.data;
        setImage(image.data);
      }
    };
    getImage();
  }, [file]);

  const handleSubmit = (e) => {
    e.preventDefault();
    blog.username = user.username
    // send the blog information to the backend for storage
    axios
      .post(`${url}/blogs/saveBlog`, blog)
      .then((res) => console.log(res.data))
      .then(() => {
        setblog(initialValues);
        history.push('/blogspage'); // send the user back to the list of blogs
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (e) => {
    setblog({ ...blog, [e.target.name]: e.target.value });
  };

  return (
    <div className='write'>
      {!user ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img className='writeImg' src={imageUrl} alt='' />
          <form className='writeForm' onSubmit={handleSubmit}>
            <div className='writeFormGroup'>
              <label for='fileInput'>
                <i class='writeIcon fas fa-plus' />
              </label>
              <input
                type='file'
                id='fileInput'
                style={{ display: 'none' }}
                onChange={(e) => setFile(e.target.files[0])}
              />
              <input
                type='text'
                placeholder='Title'
                className='writeInput'
                autoFocus={true}
                value={blog.title}
                name='title'
                onChange={handleChange}
              />
              <button className='writeSubmit' type='Submit'>
                Publish
              </button>
            </div>
            <div className='writeFormGroup'>
              <textarea
                placeholder='Add your ideas!'
                className='writeText'
                name='text'
                value={blog.text}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
