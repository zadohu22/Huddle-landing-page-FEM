import React from "react";
import mockup from "../images/images/illustration-mockups.svg";

const HeroImage = () => {
  return (
    <div className='p-4 mt-32 max-w-[416px] lg:max-w-[75%] lg:min-w-[50%] lg:ml-20'>
      <img src={mockup} alt='mockup' />
    </div>
  );
};

export default HeroImage;
