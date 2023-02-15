import React from 'react';
import '../css/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>

      <div className="xyz">
        <div className="button">
            <div className="bt"><button disabled='true' >Previous</button></div>
            <div className="bt"><button>Next >></button></div>
        </div>

        <div className="t">
           <h4>Powered by Blog</h4>
        </div>
        </div>
    </div>
  );
}

export default Footer;
