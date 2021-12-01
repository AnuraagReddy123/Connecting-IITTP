import React, { useEffect, useState } from 'react';
const DogPicture = () => {
  const [imageUrl, setImageUrl] = useState('');
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.message);
      });
  }, []);
  return (
    <div>
      {' '}
      <img src={imageUrl} alt='a dog' height='200' width='200' />{' '}
    </div>
  );
};
export default DogPicture;
