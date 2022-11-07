import React from "react";

const InfoContainer = () => {
  return (
    <div className='relative w-full h-full flex flex-col justify-center items-center bottom-12 lg:mb-0'>
      <div className='text-center md:text-left lg:self-start text-3xl mt-10 text-white font-bold p-4'>
        <h1>Build The Community Your Fans Will Love</h1>
      </div>
      <div className='text-center flex flex-col justify-center items-center lg:text-left w-full text-white p-4'>
        <p className='lg:mr-40 max-w-[80%]'>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <div className='text-center lg:text-left lg:mt-8 lg:ml-2 md:relative md:top-0'>
          <button className='w-[15em] h-12 rounded-3xl mt-8 bg-white text-violetHuddle hover:bg-soft-magenta hover:text-white'>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoContainer;
