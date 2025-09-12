import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1> About Me </h1>
            <img src={theme_pattern} alt=''/>
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt=''/>
                <div className="about-para">
                    <p> Hi,I'am Omkar Nerale, A computer Science Graduate </p>
                    <p> I’m a tech enthusiast skilled in HTML, CSS, JavaScript, and familiar with React.js. I have hands-on experience with AWS EC2, S3, CloudFront, and GitHub, and I’m building strong expertise in DevOps with tools like Docker while learning more in this space. </p>
                    <p>My focus is on creating scalable, automated, and reliable solutions that bridge development and operations.</p>
                </div>
            </div>
            <div className="about-right">
                <div className='about-skills'>
                <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"80%"}}></hr></div>
                <div className="about-skill"><p>Javascript</p> <hr style={{width:"50%"}}></hr></div>
                <div className="about-skill"><p>React JS</p> <hr style={{width:"40%"}}></hr></div>
                <div className="about-skill"><p>Core java</p> <hr style={{width:"80%"}}></hr></div>
                <div className="about-skill"><p>SQL</p> <hr style={{width:"80%"}}></hr></div>
                <div className="about-skill"><p>AWS</p> <hr style={{width:"60%"}}></hr></div>
                <div className="about-skill"><p>Linux</p> <hr style={{width:"70%"}}></hr></div>
                <div className="about-skill"><p>Docker</p> <hr style={{width:"40%"}}></hr></div>
                <div className="about-skill"><p>GitHub </p> <hr style={{width:"80%"}}></hr></div>
                </div>
            </div>
        </div>
        {/* <div className="about-achievements">
            <div className="about-achievement">
                <h1> Jain college of Engineering ,Belagavi</h1>
                <p> B.E (Cpmputer Science)</p>
            </div>
            <hr/>
             <div className="about-achievement">
                <h1> Jain college of Engineering ,Belagavi</h1>
                <p></p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1> Jain college of Engineering ,Belagavi</h1>
                <p></p>
            </div>
            <hr/>

        </div> */}
    </div>
  )
}

export default About