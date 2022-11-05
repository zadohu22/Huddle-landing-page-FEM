import React from "react";
import logo from "../images/images/logo.svg";

const LogoImage = () => {
  return (
    <img
      src={logo}
      alt='logo'
      className='self-start justify-self-start absolute top-5 left-10 w-40'
    />
  );
};

export default LogoImage;
