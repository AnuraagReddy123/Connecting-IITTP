import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router';
import './WriteBlog.css';

const port = process.env.PORT || 4000;

export default function WriteBlog() {

  const initialValues = {
    title: '',
    text: '',
    picture: '',
    username: 'Anuraag',
    createdDate: new Date(),
  }

  const [blog, setblog] = useState(initialValues);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // send the blog information to the backend for storage
    axios.post(`http://localhost:${port}/blogs/saveBlog`, blog)
    .then((res) => console.log(res.data))
    .then(() => {
      setblog(initialValues);
      history.push("/blogspage");// send the user back to the list of blogs
    })
    .catch(error => console.log(error));
  };

  const handleChange = (e) => {
    setblog({...blog,[e.target.name]:e.target.value});
  };

  return (
    <div className='write'>
      <img
        className='writeImg'
        src='https://staticdelivery.nexusmods.com/images/952/16613024-1477159025.png'
        alt=''
      />
      <form className='writeForm' onSubmit={handleSubmit}>
        <div className='writeFormGroup'>
          <label for='fileInput'>
            <i class='writeIcon fas fa-plus' />
          </label>
          <input type='file' id='fileInput' style={{ display: 'none' }} />
          <input
            type='text'
            placeholder='Title'
            className='writeInput'
            autoFocus={true}
            value={blog.title}
            name='title'
            onChange={handleChange}
          />
          <button className='writeSubmit' type='Submit'>Publish</button>
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
  );
}
