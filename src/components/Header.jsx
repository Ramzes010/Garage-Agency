import React from "react";
import localFont from 'next/font/local';
import DotsIcon from './DotsIcon';




const Header = () => {
  return (
    <header 
      className={`flex justify-between  text-[#FFF] items-start font-sans`}
    >
      <a href="#">
        <span className="text-[1.25vw] text-[#FFF] font-bold ppmori">GARAGE AGENCY</span>
      </a>
      
      <div className=" text-[1.25vw] ppmori">a new era of tech <br /> excellence</div>
      
      <div className="flex flex-col">
        <a href="#" className="text-[#fff] text-[1.25vw] transition-all duration-700 hover:scale-115">
          <DotsIcon /> <span className="ppmori">WEB-DEV</span>
        </a>
        <a href="#" className="text-[#fff] text-[1.25vw] transition-all duration-700 hover:scale-115">
          <DotsIcon /> <span className="ppmori">DESIGN</span>
        </a>
        <a href="#" className="text-[#fff] text-[1.25vw] transition-all duration-700 hover:scale-115">
          <DotsIcon /> <span className="ppmori">PACKAGE</span>
        </a>
        <a href="#" className="text-[#fff] text-[1.25vw] transition-all duration-700 hover:scale-115">
          <DotsIcon /> <span className="ppmori">MARKETING</span>
        </a>
        <a href="#" className="text-[#fff] text-[1.25vw] transition-all duration-700 hover:scale-115">
          <DotsIcon /> <span className="ppmori">SEO</span>
        </a>
      </div>
      
      <div>
        <a href="#" className="text-[1vw] text-[#212121] bg-[#fff] py-[0.63vw] px-[2.75vw] rounded-[0.63vw]  ppmori">
          Let’s talk
        </a>
      </div>
    </header>
  );
};

export default Header;