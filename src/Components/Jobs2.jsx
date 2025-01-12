import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import './Jobs2.css';
import "swiper/css";
import { sliderSettings } from '../Components/common'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions } from '@mui/material';


import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import './mystyle.css'

export default function Jobs2() {
  const [jobs, setJobs] = useState([]);
  const nav= useNavigate()

  

  useEffect(() => {
    // Fetch jobs data from local storage
    const storedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    setJobs(storedJobs);
  }, []);

  
const SliderButtons = () =>{ 
  const swiper = useSwiper();
  return(
      <div className="r-buttons">
          <button onClick={()=>swiper.slidePrev()}>&lt;</button>
          <button onClick={()=>swiper.slideNext()}>&gt;</button>
      </div>
  );
};

  const handleApply = (jobIndex) => {
    nav('/Jobapplicationform')

    // Implement the logic for applying to a job
    // You can add the application logic here
    // For example, you can update the job's status or add user information to the job
    console.log(`Applying to job with index ${jobIndex}`);
  };

  return (
//     <section className="r-wrapper">
//       <div className="paddings innerWidth r-container r-head ">
//       <div className="r-head flexColStart"> 
//       <div className='display-jobs'>
//        <span className='orangeText'> Available Jobs </span> <br/>
//         <span className='primaryText'> Explore Openings </span>
//       </div>
//       <Swiper {...sliderSettings}> 
//       {jobs.map((job, index) => (
//         <SwiperSlide key={index}>

//            <div className="r-card">
//           <h3 className='orangeText'>{job.title}</h3>
//           <p className="primaryText">{job.company}</p>
//           <p className="primaryText">{job.description}</p>  <br/>
//           <br/> <span className="secondaryText2">Skills required: {job.skills.join(', ')}</span> 
//           <p className="secondaryText2">Contact: {job.contact}</p>
//           <p className="secondaryText2">Location: {job.location}</p>
//           </div>
//           <Button className="button" onClick={() => handleApply(index)} variant="contained">
//             Apply
//           </Button>
//         </SwiperSlide>
//       ))}
//       </Swiper>
//     </div>
//       </div>
    
      
//       </section>
    
//   );
// }
<div>
<span className='orangeText' style={{ color: '#FFA500', fontFamily: '"Brush Script MT", cursive', fontWeight: 'bold', fontSize: '30px' }}> Available Jobs </span> <br/>
<span className='orangeText' style={{ color: '#FFA500', fontFamily: '"Brush Script MT", cursive', fontWeight: 'bold', fontSize: '27px' }}> Explore Openings </span>

<br/><br/>
<div className='jobcard'>

{jobs.map((job, index) => (
  <Card key={index} sx={{ maxWidth: 345, marginBottom: 2 }} className='card'>
    <CardActionArea >
      <CardMedia
        component="img"
        height="140"
        image={job.companylogo}
        alt={job.title || "Job Image Alt Text"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {job.title || "Job Title"}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {job.company || ""}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {job.description || " "}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {job.skills || " "}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {job.contact || " "}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {job.location || " "}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {job.description || " "}
        </Typography>
        <Button className="button" onClick={() => handleApply(index)} variant="contained">
           Apply
          </Button>
      </CardContent>
    </CardActionArea>
    <CardActions className='button'>
     
      </CardActions>
    
      
    </Card>
    
  ))}
  
</div>
</div>
  );
}