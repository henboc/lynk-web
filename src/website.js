// components/Website.js

import React, {useEffect} from 'react';
import WOW from 'wowjs';
import 'animate.css/animate.css'; // Import Animate.css
import 'wowjs/css/libs/animate.css';
import SectionOne from './sectionOne';
import SectionTwo from './sectionTwo';
import SectionThree from './sectionThree';
import SectionFour from './sectionFour';
import SectionFive from './sectionFive';
import SectionSix from './sectionSix';
import SectionSeven from './sectionSeven';

const Website = () => {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);
  return (
    <div>
      
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
      
      
    </div>
  );
};

export default Website;
