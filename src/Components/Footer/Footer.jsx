import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="f-wrapper">
    <div className="paddings innerWidth flexCenter f-container">

        <div className="flexColstart f-left">
            <img src="./logo2.png" alt="" width={120} /><br/>
            <span className='secondaryText'>
                Our vision is to provide individuals with the optimal platform<br/>
                for discovering the most fitting and rewarding career paths.
            </span>
        </div>

        <div className="flexColStart f-right">
            <span className='primaryText'>Information</span>
            <span className='secondaryText '>789 Job Street,Opportunity Nagar, Hireland 45678,Career City, Employment State, India.</span>
            <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>About us</span>
        </div>
        </div>
        
    </div>
    </div>
  )
}

export default Footer
