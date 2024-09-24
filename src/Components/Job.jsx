import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "swiper/css";
import "./Jobs.css";
import data from '../../src/slider.json';
import { sliderSettings } from '../../src/utils/common';

const Jobs = () => {
  return (
   <section className="r-wrapper">
   <div className="paddings innerWidth r-container r-head ">
    <div className="r-head flexColStart">
        <span className='orangeText'> Top Careers </span>
        <span className='primaryText'> Explore Openings </span>
    </div>
    <Swiper {...sliderSettings}>  
    <SliderButtons/>
       { data.map((card,i)=>(
            <SwiperSlide key={i}>
                <div className="r-card">
                    <img src={card.image} alt="home" />

                    <span className="secondaryText r-price"> 
                          <span style={{color:"orange"}}>{card.Compensation}</span>  <br/>
                          
                    </span> 

                   <span className="primaryText">{card.Role}</span>  <br/>
                    <span className="secondaryText">{card.Location}</span><br/>
                   

                </div>
            </SwiperSlide>
        ))}
    </Swiper>
   </div>
   </section>
  );
};

export default Jobs;


const SliderButtons = () =>{ 
    const swiper = useSwiper();
    return(
        <div className="r-buttons">
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    );
};
