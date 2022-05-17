import React from "react";
import Typical from "react-typical";
import './Profile.css'
import { GrFacebook,GrInstagram,GrLinkedin } from 'react-icons/gr';
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
              <div className="colz-icon">
            <a href="https://www.facebook.com/AhmedHUSSeinyoussef/">
              <GrFacebook style={{color:"white"}}/>
            </a>
            <a href="https://www.instagram.com/ahmedhusseiiin/">
              <GrInstagram style={{color:"white"}}/>
            </a>
            <a href="https://www.linkedin.com/in/ahmed-marzouk-39b866239/">
              <GrLinkedin style={{color:"white"}}/>
            </a>

              </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text"> Ahmed </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical 
                loop={Infinity}
                steps=
                {[
                  "Full Stack Developer",
                  2000,
                  "Java Developer",
                  2000,
                  "React js Developer",
                  2000,
                ]}/>
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="Ahmed Hussein.pdf" download="Ahmed Hussein's cv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <p>The website is still under construction</p>
        <div className="profile-picture">
            <div className="profile-picture-background"></div>
        </div>
        </div>
        </div>
  );
}
