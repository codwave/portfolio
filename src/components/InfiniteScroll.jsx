import React from "react";
import image1 from "../assets/services/4.png"; 
import image2 from "../assets/services/6.png"; 
import image3 from "../assets/services/7.png"; 


const InfiniteScroll = () => {
  return (
    <div className="scroll-container ">
      <div className="scroll-content">
        <img src={image1} className=" " alt="Scrolling" />
        <img src={image2} className=" " alt="Scrolling" />
        <img src={image3} className="" alt="Scrolling" /> 
        <img src={image1} className=" " alt="Scrolling" />
        <img src={image2} className=" " alt="Scrolling" />
        <img src={image3} className="" alt="Scrolling" />  
        <img src={image1} className=" " alt="Scrolling" />
        <img src={image2} className=" " alt="Scrolling" />
        <img src={image3} className="" alt="Scrolling" />   

      </div>
    </div>
  );
};

export default InfiniteScroll;
