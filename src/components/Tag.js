import React from 'react';
import '../css/Tag.css'

const Tag = () => {
  return (
    <div className='tag'>

      <div className="htag">
      <h2>Tags</h2>
      </div>

       <div className="tagvalue">
        <div className="value"> <button className='travel'>Travel</button> </div>
        <div className="value"> <button>New york</button> </div>
        <div className="value"> <button>London</button> </div>
        <div className="value"> <button>Norway</button> </div>
        <div className="value"> <button>Ideas</button> </div>
        <div className="value"> <button>Baby</button> </div>
        <div className="value"> <button>Sports</button> </div>
        <div className="value"> <button>Games</button> </div>
        <div className="value"> <button>Baby</button> </div>
        <div className="value"> <button>Ideas</button> </div>
        <div className="value"> <button>Clothing</button> </div>
        <div className="value"> <button>Family</button> </div>
       </div>

    </div>
  );
}

export default Tag;
