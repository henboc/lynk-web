// components/SectionOne.js

import React from 'react';
import mix from './images/sec2.webp'; 
const SectionThree = () => {
  return (
    <section className="section-three">
      <div className="container">
        <div className="row">
            <div className="col-md-6">
                <img src={mix} alt="Mobile" className="img-fluid wow fadeInLeft" data-wow-delay="0.5s" />
            </div>
            <div className="col-md-6 wow fadeInRight" data-wow-delay="0.5s">
             <p className='threeP1'>Verification</p>
             <p className='threeP2'>We prioritize authenticity by employing a multi-faceted verification process, employing a unique technique to ensure genuine connections. Our commitment to user verification goes beyond traditional methods, creating a secure environment where you can confidently meet real individuals with sincere intentions.</p>
            </div>
           
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
