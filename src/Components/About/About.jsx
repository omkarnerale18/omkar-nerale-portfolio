import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img_2 from '../../assets/profile_img-2.jpg'
import user_icon from '../../assets/user_icon.svg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1> About Me </h1>
            <img src={theme_pattern} alt=''/>
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img_2} alt=''/>
                <div className="about-para">
                    <p>I am an aspiring Cloud & DevOps Engineer with a strong focus on DevOps practices and cloud automation. My skills include Linux, Git/GitHub, AWS (EC2, S3, IAM, VPC, Lambda, CloudWatch, SNS), Docker, Kubernetes, and Jenkins for building scalable and automated solutions.</p>
                    <p>Alongside my DevOps expertise, I also have knowledge of Java, HTML, CSS, and JavaScript, which helps me understand development workflows end-to-end.</p>
                    <p>My goal is to design efficient, secure, and reliable cloud-native systems that bridge the gap between development and operations.</p>
                </div>
            </div>
            <div className="about-right">
                <div className='about-skills'>
                <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"80%"}}></hr> <span>80%</span></div>
                <div className="about-skill"><p>Javascript</p> <hr style={{width:"50%"}}></hr> <span>50%</span></div>
                <div className="about-skill"><p>React JS</p> <hr style={{width:"40%"}}></hr> <span>40%</span></div>
                <div className="about-skill"><p>Core java</p> <hr style={{width:"80%"}}></hr> <span>80%</span></div>
                <div className="about-skill"><p>SQL</p> <hr style={{width:"80%"}}></hr> <span>80%</span></div>
                <div className="about-skill"><p>AWS</p> <hr style={{width:"60%"}}></hr> <span>60%</span></div>
                <div className="about-skill"><p>Linux</p> <hr style={{width:"70%"}}></hr> <span>70%</span></div>
                <div className="about-skill"><p>Docker</p> <hr style={{width:"60%"}}></hr> <span>60%</span></div>
                <div className="about-skill"><p>GitHub </p> <hr style={{width:"80%"}}></hr> <span>80%</span></div>
                <div className="about-skill"><p>Kubernetes</p> <hr style={{width:"60%"}}></hr> <span>60%</span></div>
                <div className="about-skill"><p>Jenkins</p> <hr style={{width:"60%"}}></hr> <span>60%</span></div>
                </div>
            </div>
        </div>
        <div className="about-education-experience">
            <div className="education-left">
                <h2><span style={{fontSize: '24px', marginRight: '10px'}}>🎓</span>Education</h2>
                <div className="education-item">
                    <h3>🎓 B.E Computer Science</h3>
                    <p>Jain College of Engineering, Belagavi</p>
                    <p>Grade: 8.3 CGPA</p>
                </div>
                <div className="education-item">
                    <h3>📚 XII PU</h3>
                    <p>KLE Independent PU College, Nipani</p>
                    <p>Grade: 93%</p>
                </div>
            </div>
            <div className="experience-right">
                <h2><span style={{fontSize: '24px', marginRight: '10px'}}>💼</span>Experience</h2>
                <div className="experience-item">
                    <h3>🚀 DevOps Trainee</h3>
                    <p>Jspiders Training and Development Center, Bengaluru</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About