// components/SectionOne.js

import React from 'react';
import { Link } from 'react-router-dom';
const SectionSeven = () => {
  return (
    <section className="section-seven">
      <div className="container">
       <hr className='hrS wow fadeInUp' data-wow-delay="0.8s" ></hr>
       <div className="sec7HrefC  wow fadeInRight" data-wow-delay="0.5s"> 
       <a className='sec7Href' href='terms'>Terms And Conditions</a>
       {/* <Link to="/terms" className="sec7Href">Terms And Conditions</Link> */}
        <a className='sec7Href'  href='privacy'>Privacy Policy</a>
       </div>
        
      
      </div>
    </section>
  );
};

export default SectionSeven;
