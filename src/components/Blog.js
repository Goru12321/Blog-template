import React from 'react';
import '../css/Blog.css'


const Blog = (props) => {
  const {title,desc,image}= props;
  return (
    <div className="container">
    <div className='blog'>
      <img src={image} alt="" />
      <h1>{title}</h1>
      <p className='desc'>{desc}, April 7,2014</p>

      <p className='para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur odio inventore ducimus vero eveniet soluta, debitis consectetur at impedit quas ipsum ad aperiam! Minus, ullam recusandae, explicabo consequuntur magnam voluptas perferendis doloremque quaerat voluptatem repellat numquam nihil doloribus illo unde!lorem40</p>

      <button className='read'>READ MORE >></button>
      
    </div>
    </div>
  );
}

export default Blog;
