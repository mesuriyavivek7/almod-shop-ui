import React from 'react'


//importing css
import './footer.css'


//importing icons
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footerSec'>
            <div className='footerItem'>
                <span className='footerLogo'>
                   fuelflex.
                </span>
                <div className='socialLinks'>
                   <span className='socialTitle'>Follow Us:</span>
                   <div className='links'>
                     <a href="#" className='linkItem'><InstagramIcon></InstagramIcon> Instagram</a>
                     <a href="#" className='linkItem'><FacebookIcon></FacebookIcon> Facebook</a>
                     <a href="#" className='linkItem'><XIcon></XIcon> Twitter</a>
                     <a href="#" className='linkItem'><LinkedInIcon></LinkedInIcon> LinkedIn</a>
                   </div>
                </div>
            </div>
            <div className='footerItem'>
                <span className='quickTitle' >Quick Links</span>
                <div className='quickLinks'>
                    <a className='quickItem' href="#">Home</a>
                    <a className='quickItem' href="#">Our Store</a>
                    <a className='quickItem' href="#">About Us</a>
                    <a className='quickItem' href="#">Contact Us</a>
                </div>
            </div>

            

            <div className='footerItem'>
                <span className='helpTitle'>Help</span>
                 <div className='helpLinks'>
                    <a href='#' className='helpItem'>FAQs</a>
                    <a href='#' className='helpItem'>Terms of Service</a>
                    <a href='#' className='helpItem'>Refund & Cancellation</a>
                    <a href='#' className='helpItem'>Shipping Policy</a>
                    <a href='#' className='helpItem'>Return Order</a>
                 </div>
            </div>

            <div className='footerItem'>
                <span className='contactTitle'> Contact</span>
                <div className='contacts'>
                    <div className='contactItem'>
                        <LocationOnIcon></LocationOnIcon>
                        <span className='contacttextaddress'>Anushruti Tower, Thaltej Cross Road,Ahmedabad-380052</span>
                    </div>
                    <div className='contactItem'>
                        <CallIcon></CallIcon>
                        <div className='contactTexts'>
                            <a href='9587465873' className='contacttext'>+91 9587465873</a>
                            <a href='8746576455' className='contacttext'>+91 8746576455</a>
                        </div>
                    </div>
                    <div className='contactItem'>
                        <EmailIcon></EmailIcon>
                        <div className='contactTexts'>
                             <a href='temp1@gmail.com' className='contacttext'>temp1@gmail.com</a>
                             <a href='temp2@gmail.com' className='contacttext'>temp2@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='footerCopyright'>
            <span className='copyText'>&#169; 2024 Developed by MV's | all rights reserved</span>
        </div>
    </div>
  )
}
