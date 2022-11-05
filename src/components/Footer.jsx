import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='absolute bottom-4 w-full flex text-white text-2xl justify-center items-center gap-8'>
      <FaFacebook className='cursor-pointer hover:text-soft-magenta' />
      <FaTwitter className='cursor-pointer hover:text-soft-magenta' />
      <FaInstagram className='cursor-pointer hover:text-soft-magenta' />
    </div>
  );
};

export default Footer;
