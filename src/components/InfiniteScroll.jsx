import React from "react";
import image from "../assets/services/Portfolio.jpg"; 

const InfiniteScroll = () => {
  return (
    <div className="scroll-container ">
      <div className="scroll-content">
        <img src={image} className=" " alt="Scrolling" />
        <img src={image} className=" " alt="Scrolling" />
        <img src={image} className="" alt="Scrolling" />        
      </div>
    </div>
  );
};

export default InfiniteScroll;
