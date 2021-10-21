import './WriteBlog.css';

export default function WriteBlog() {
  return (
    <div className='write'>
      <img
        className='writeImg'
        src='https://staticdelivery.nexusmods.com/images/952/16613024-1477159025.png'
        alt=''
      />
      <form className='writeForm'>
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
          />
        </div>
        <div className='writeFormGroup'>
          <textarea
            placeholder='Add your ideas!'
            className='writeInput writeText'
          />
        </div>
        <button className='writeSubmit'>Publish</button>
      </form>
    </div>
  );
}
