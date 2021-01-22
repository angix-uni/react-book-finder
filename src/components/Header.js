import React from "react";
import banner from './assets/banner.jpg';



const Header = () => {
  return (
    <div class="text-center">
    <img src={banner} alt="banner" className="header"></img>
    </div>
  );
};

export default Header;
