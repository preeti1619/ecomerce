import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>

<section className="f-wrapper">
    <div className="paddings innerWidth flexCenter f-container">
<div className="flexColStart f-left">

<img src="https://raw.githubusercontent.com/ZainRk/RealEstate-web-starterpack/c42c20faef7b48cf3d9555196f84602dd81d513b/public/logo2.png" alt="" width={120}></img>

<span className='secondaryText'>
Our vision is to make all people <br>
</br>
the best place to live for them.
</span>
</div>
<div className="flexColStart f-right">
     <span className='primaryText '>
Information
     </span>
     <span>145 New york,FL 4571 ,USA</span>
     <div className="flexCenter f-menu">
        <span>Propert </span><span>Services</span><span>Product</span><span>About Us</span>
     </div>
</div>
    </div>
</section>


    </div>
  )
}

export default Footer