import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt='' className='profile-pic'/>

        <h1><span>Hello I am Omkar Nerale,</span> Cloud and DevOps Engineer!</h1>
        <p>
       
        </p>

        <div className='hero-action'>
            <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me </AnchorLink></div>
            <div className="hero-resume">
                <a href="https://drive.google.com/file/d/1Qi7mQz7VKVlbdOuSkcF8pHMMefP_iHVb/view?usp=sharing" target="_blank" rel="noopener noreferrer" download>
                    Download CV
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero