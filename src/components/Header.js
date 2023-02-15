import React from 'react';
import '../css/Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='text'>
      <h1>MY BLOG</h1>  </div>
      <div className='font'>
        <p>Welcome to the blog of <button className='btn'>unknown</button></p>
      </div>

    </div>
  );
}

export default Header;
