import React from 'react'
import { useState } from 'react'
import './Hero.css'
import{HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import {motion} from 'framer-motion'



const Hero = () => {
    const SearchBar = ({ filter, setFilter }) => {
        const [searchResults, setSearchResults] = useState([]);
        const handleSearch = () => {
            const storedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
            const filteredJobs = storedJobs.filter((job) =>
      job.title.toLowerCase().includes(filter.toLowerCase()) ||
      job.city.toLowerCase().includes(filter.toLowerCase()) ||
      job.country.toLowerCase().includes(filter.toLowerCase())
    );
    console.log('Search results:', searchResults);
            // Add your search logic here using the filter state
            console.log('Search clicked:', filter);
            setSearchResults(filteredJobs);
           
          };
        return (
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input
              placeholder="Search by title/city/country..."
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
      />
      <button className="button" onClick={handleSearch}>
        Search
      </button>
      {searchResults.length > 0 && (
             <div>
             <h3>Search Results:</h3>
             <ul>
            {searchResults.map((result) => (
              <li key={result.id}>{result.title} in {result.city}, {result.country}</li>
            ))}
            </ul>
            </div>
             )}
    </div>
        );
      };


  return (
   <section className="hero-wrapper " >
    <div className=" paddings innerWidth flexCenter hero-container ">

        <div className=" flexColStart hero-left">
            <div className="hero-title">
                <div className="orange-circle"></div>
                <motion.h1 
                initial={{y: "2rem", opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{
                    duration: 2,
                    type:"spring"
                }}>
                <div className="hero-title">
                Discover<br/> 
                Your Next<br/> Opportunity<br/>
                </div>
                </motion.h1>
            </div>
            <div className=" flexColStart her-des">
                <span>
                Explore a wide range of job listings tailored for you.
                </span>
            </div>
            <div className="flexCenter search-bar">
               <HiLocationMarker color="var(--blue) size={25}"/>
               <input type="text"/>
               <button className='button' onClick={SearchBar}> Search </button>
              
        </div>
            <div className="flexCenter stats">
    <div className="flexColStart stat">
        <span>
            <CountUp start={85000} end={93000} duration={4}/>
        <span> + </span>
        </span>
        <span className='secondaryText'> Active Job Listings </span>
    </div>
</div>

<div className="flexCenter stats">
    <div className="flexColStart stat">
        <span>
            <CountUp start={85000} end={90000} duration={4}/>
        <span> + </span>
        </span>
        <span className='secondaryText'> Satisfied Job Seekers </span>
    </div>
</div>

<div className="flexCenter stats">
    <div className="flexColStart stat">
        <span>
            <CountUp start={150000} end={170000} duration={4}/>
        <span> + </span>
        </span>
        <span className='secondaryText'> Resumes in our Database </span>
    </div>
</div>

<div className="flexCenter stats">
    <div className="flexColStart stat">
        <span>
            <CountUp start={60000} end={80000} duration={4}/>
        <span> + </span>
        </span>
        <span className='secondaryText'> Employers Trust Us </span>
    </div>
</div>



        </div>

{/*right side*/}
        <div className="flexCenter hero-right">
           <motion.div 
           initial={{y: "7rem", opacity:0}}
           animate={{y:0, opacity:1}}
           transition={{
               duration: 2,
               type:"spring"
           }}
           className="image-container">
            <img src="./heroimage.png" alt="" />
           </motion.div>
        </div>

    </div>


   </section>
  )
}

export default Hero
