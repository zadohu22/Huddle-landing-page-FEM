import React from "react";

const ContentContainer = (props) => {
  return (
    <div className='content-container w-full h-full flex flex-col justify-center items-center'>
      {props.children}
    </div>
  );
};

export default ContentContainer;
