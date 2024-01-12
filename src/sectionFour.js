// components/SectionOne.js

import React from 'react';
import emo from './images/sec4.webp'; 
const SectionFour = () => {
  return (
    <section className="section-four">
      <div className='container'>
        <div className="row">
            <div className="col-md-6 wow fadeInRight" data-wow-delay="0.5s">
                <img src={emo} alt="Mobile" className="img-fluid" />
            </div>
            <div className="col-md-6 wow fadeInLeft" data-wow-delay="0.5s">
                <p className='fourP1'>Create Memories</p>
                <p className='fourP2'>Explore the tapestry of shared experiences, venture beyond the ordinary spaces. From quaint coffee shops to scenic hikes, our dating app encourages diverse dates that kindle profound connections</p>
            </div>
            
            </div>
         
      </div>
    </section>
  );
};

export default SectionFour;
