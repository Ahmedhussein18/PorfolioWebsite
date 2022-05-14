import React from 'react'
import './Projects.css'
const Projects = () => {
  return (
    <div className='projects'>
        <h1>Projects</h1>
    <div className='project-container'>
      
      <div className='img-container'>
       <img src={"AclProject.png"} alt='no internet connection'/>
 
      </div>
      <div className='text-container'>
          <h2>
              Flight Reservation System
          </h2>
      <p>Implemented a fully functional Flight Reservation System using MERN stack.</p>

      
          <a  href="https://github.com/advanced-computer-lab/AclProject">
              <button className='highlighted-btn'>View on GitHub</button>
          </a>

      </div>

     
      </div>
      </div>
  )
}

export default Projects
