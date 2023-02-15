import React from 'react';
import '../css/Popularpost.css'
import img2 from '../2.jpg'

const Popularpost = () => {
  return (
    <div className='pop'>
      <div className="phead">
     <h1> popular post</h1>
     </div>
       <div className="card">
          <div className="image">
             <img src={img2} alt="" />
          </div>
          <div className="ptext">
             <h2>Lorem</h2>
             <p>sed tinic hjfg</p>
          </div>
            </div>
              <hr />
            <div className="card">
          <div className="image">
             <img src={img2} alt="" />
          </div>
          <div className="ptext">
             <h2>Lorem</h2>
             <p>sed tinic hjfg</p>
          </div>
            </div>
              <hr />
            <div className="card">
          <div className="image">
             <img src={img2} alt="" />
          </div>
          <div className="ptext">
             <h2>Lorem</h2>
             <p>sed tinic hjfg</p>
          </div>
            </div>





    </div>
  );
}

export default Popularpost;
