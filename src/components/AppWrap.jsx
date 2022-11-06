import React from "react";

const AppWrap = (props) => {
  return (
    <div className="h-[100vh] w-full flex flex-col lg:flex-row justify-center items-center bg-[url('./images/images/bg-mobile.svg')] sm:bg-[url('./images/images/bg-desktop.svg')] bg-no-repeat bg-violetHuddle relative">
      {props.children}
      {console.log("props.children is my new favorite thing.")}
    </div>
  );
};

export default AppWrap;
