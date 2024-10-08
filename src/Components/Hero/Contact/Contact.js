import React from "react";
import './Contact.css'
import { MdCall } from "react-icons/md";
import {BsFillChatDotsFill} from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
const Contact = () => {
  return (
    <div>
      <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
          <div className="  flexColStart c-left">
            <span className="orangeText"> Our Contacts</span>
            <span className="primaryText"> Easy to Conatct us</span>
            <span>
              {" "}
              We always ready to help providing the best service for you
              <br></br> We belive a good place to live can make your life better
            </span>

            <div className="flexColStart contactModes">
              <div className="flexStart row">
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdCall size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">call</span>
                      <span className="secondaryText"> 012 123 145 14</span>
                    </div>
                  </div>
                  <div className="flexCenter button">call now</div>
                </div>
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">chat</span>
                      <span className="secondaryText"> 012 123 145 14</span>
                    </div>
                  </div>
                  <div className="flexCenter button">chat now</div>
                </div>
              </div>





              <div className="flexStart row">
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText"> video call</span>
                      <span className="secondaryText"> 012 123 145 14</span>
                    </div>
                  </div>
                  <div className="flexCenter button"> video call now</div>
                </div>
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">message</span>
                      <span className="secondaryText"> 012 123 145 14</span>
                    </div>
                  </div>
                  <div className="flexCenter button">  message now</div>
                </div>
              </div>
            </div>
          </div>
          <div className=" c-right">
            <div className=" flexColStart image-container">
              <img src="https://raw.githubusercontent.com/ZainRk/RealEstate-web-starterpack/c42c20faef7b48cf3d9555196f84602dd81d513b/public/contact.jpg"></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
