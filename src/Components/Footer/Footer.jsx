import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <div className='footer-logo'>ON</div>
                <p></p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt=''/>
                    <input type='email' placeholder='Enter your Email'/>

                </div>
                <div className="footer-subscribe"> Subscribe</div>
            </div>
        </div> 
        <hr/>
        <div className="footer-bottom">
            <p className='footer-bottom-left'>© 2025 Omkar Nerale. All rights reserved.</p>
        </div>

    </div>
  )
}

export default Footer