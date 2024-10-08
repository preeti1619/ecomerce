import React from "react";
import './Header.css'
import { BiMenuAltRight } from "react-icons/bi";
const Header = () => {
  return (
    <div>
      <section className="h-wrapper">
        <div className=" flexCenter paddings innerWidth h-container">
          <img src="https://raw.githubusercontent.com/ZainRk/RealEstate-web-starterpack/c42c20faef7b48cf3d9555196f84602dd81d513b/public/logo.png" alt="logo" width={100}></img>
      
        <div className=" flexCenter h-menu">
          <a href="">Residences</a>
          <a href="">Our value</a>
          <a href="">Contact us</a>
          <a href="">Get started</a>
          <button className="button">
            <a href="./"> Contact</a>
          </button>
        </div>
        </div>
        <div className="menu-icon">
          <BiMenuAltRight size={50}/>
        </div>
      </section>
    </div>
  );
};

export default Header;
