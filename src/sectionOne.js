// components/SectionOne.js

import React from 'react';
import lynkLogo from './images/logo.webp'; 

const SectionOne = () => {
  return (
    <section className="section-one">
      <div className="overlay">
        <div className="content wow fadeInDown" data-wow-delay="0.5s">
          <div className='center-img'>
            <img src={lynkLogo} className='logo'/>
          </div>
          
          <p className='logoP1'>Lynk</p>
          <p>Love, Fun, Relationships</p>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
