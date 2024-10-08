import React, { useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import "./Value.css";
import data from 'D:/4achivers/react/real/src/utils/Accordion.jsx'
const Value = () => {
  const [className,setClassName]=useState(null)
  return (
    <div>
      <section className="V-wrapper">
        <div className="paddings innerWidth flexCenter V-container">
          <div className="V-left">
            <div className="image-container">
              <img src="https://raw.githubusercontent.com/ZainRk/RealEstate-web-starterpack/c42c20faef7b48cf3d9555196f84602dd81d513b/public/value.png"></img>
            </div>
          </div>
          {/* right...................................... */}
          <div className="flexColStart V-right">
            <span className="orangeText">Our Value</span>
            <span className="primaryText"> Value We Give to You</span>
            <span className="secondaryText">
              We always ready to help providing the best service for you
              <br></br>
              We belive a good place to live can make your life better
            </span>
            <Accordion
              className="Accordion"
              allowMultiExpended={false}
              preExpanded={[0]}
            >
              {data.map((item, i) => {
               
                return (
                  <AccordionItem className={`accordionItem${className}`} key={i} uuid={i}>
                <AccordionItemHeading>
                      <AccordionItemButton className="flexCenter accordionButton">
                        <AccordionItemState>
                          {({expended})=>expended?setClassName("expended"):setClassName("collapsed")}
                        </AccordionItemState>
                        <div className="flexCenter icon">{item.icon}</div>
                        <span className="primaryText">{item.heading}</span>
                        <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20}/>
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Value;
