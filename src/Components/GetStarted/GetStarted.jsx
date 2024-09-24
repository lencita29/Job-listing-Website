import React from 'react';
import './GetStarted.css';


const GetStarted = () => {
  

  return (
    <section>
        <div className="flexColCenter ">
            <span className='third-primaryText'>
            <span className='orangeText'>"</span>Connect with top companies and find your dream job today<span className='orangeText'>"</span>
            </span >
            <span className='third-primaryText'>
            <span className='orangeText'>"</span>Stay updated with the latest industry trends and job market insights<span className='orangeText'>"</span>
            </span>
            <span className='third-primaryText'>
            <span className='orangeText'>"</span>Join our community of professionals and boost your career<span className='orangeText'>"</span>
            </span>
        </div>
     
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className='primaryText'>Get Started with Silver line</span>
          <span className='secondaryText'>Subscribe and discover compelling job offers from us.<br/>
Find your career path soon.
          </span>
          <button className="button">
            <a href="mailto:TheSilverline@gmail.com"> Get Started </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
