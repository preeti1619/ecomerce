import React from "react";
import "./Hero.css";
import CountUp from "react-countup";
const Hero = () => {
  return (
    <div>
      <section className="hero-wrapper ">
        <div className="paddings innerWidth  flexCenter hero-container">
          <div className=" paddings flexColEnd hero-left">
            <div className="hero-title">
              <div className="orange-circle" />
              <h1>
                {" "}
                Discovery <br></br>Most suitable <br></br>property
              </h1>
            </div>
            <div className=" flexColStart  hero-des">
              <span>
                Find a variety of property that should suit you very easility
              </span>
              <span>forget all difficulties in finding residence for you</span>
            </div>
            <div className=" flexCenter  mx-4 search-bar">
              <img
                src="https://www.iconpacks.net/icons/2/free-location-icon-2955-thumb.png"
                width={25}
              ></img>
              <input type="text "></input>
              <button className="button">Sreach</button>
            </div>
            <div className="row  ">
              <div className="col-sm-4 ">
                <div className="flexCenter  state">
                  <div className="flexColStart  stats">
                    <span>
                      <CountUp start={88000} end={90000} duration={4} /><span>+</span>
                    </span>
                    <span className="secondaryText">Premium Product</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="flexCenter state">
                  <div className="flexColStart stats">
                    <span>
                      <CountUp start={1950} end={2000} duration={4} /><span>+</span>
                    </span>
                    <span className="secondaryText">Happy Customers</span>
                  </div>
                </div>
              </div>

              <div className="col-sm-5">
                <div className="flexCenter state">
                  <div className="flexColStart stats">
                    <span>
                      <CountUp  end={28} duration={4} /><span>+</span>
                    </span>
                    <span className="secondaryText">Award Winning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flexCenter hero-right">
            <div className="image-container">
              <img src="https://github.com/ZainRk/RealEstate-web-starterpack/blob/master/public/hero-image.png?raw=true"></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
