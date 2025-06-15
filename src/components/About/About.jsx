import './About.css'
import about_1 from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
import { useState } from 'react'

const About = ({setShowVideo}) => {

 
  return (
    <div className='about'>
      <div className="left">
        
        <img className="aboutImage" loading='lazy' src={about_1} alt="" />
        <img className='playButton' loading='lazy' src={play_icon} alt="" onClick={()=>{ setShowVideo(true) }}/>
      </div>
      <div className="right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leader Today</h2>
        <p>Embark onn a transformative educational journey  with our university's comprehensive education programs,
        Our cutting-edge curriculum is designed to empower the students with knowledge, 
        skills and experience needed to excel in dynamic field of education</p>
        <p>With a focus on innovation, hands-on learning, and personalized mentorship,
        our programs prepare aspiring educators to make a meaningful impact in classrooms,
        schools, and communities.</p>
        <p>Whether you aspire to become a teacher, administrator, counsellor, or educational
        leader, our diverse range of programs offer the perfect pathway to achieve your goals
        and unlick your full potential in shaping the future of education</p>

      </div>
    </div>
  )
}

export default About
