import React from 'react'

//importing css
import './about.css'


//importing components
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

//importing images
import Person from '../../assets/person.jpg'

//importing icons
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function About() {
  return (
    <>
    <Navbar></Navbar>
    <div className='about'>
        <div className='aboutTitle'>
            <span className='heading'>Our Mission & Vision</span>
            <hr className='aboutline'></hr>
        </div>

        <div className='aboutContainer'>
         <div className='aboutContent'>
            <div className='aboutBox'>
                <h2 className='aboutHead'>Our Mission</h2>
                <div className='aboutText'>
                    <span><ArrowForwardIcon></ArrowForwardIcon>  Customer oriented and we stand for quality</span>
                    <span><ArrowForwardIcon></ArrowForwardIcon>  Self improvement and team work to achieve business excellence</span>
                </div>
            </div>
            <div className='aboutBox'>
                <h2 className='aboutHead'>Our Vision</h2>
                <div className='aboutText'>
                    <span><ArrowForwardIcon></ArrowForwardIcon> Let us top this business in minimum time</span>
                    <span><ArrowForwardIcon></ArrowForwardIcon> Fuelflex at home, Fuelflex at every home, Fuelflex everywhere</span>
                </div>
            </div>
            <div className='aboutBox'>
                <h2 className='aboutHead'>Culture</h2>
                <div className='aboutText'>
                    <span><ArrowForwardIcon></ArrowForwardIcon> Employee engagement & opportunities for advancement</span>
                    <span><ArrowForwardIcon></ArrowForwardIcon> Relationship between employee & customer</span>
                </div>
            </div>
         </div>
        <div className='aboutImg'>
           <img src={Person}></img>
        </div>
      </div>
      <div className='aboutFooter'>
         <span className='aboutFooterText'>fuelflex was inception mit bhuva. bringing their entrepreneur mind, dedicates  and thet have added the human element. Before starting the business, he met his friend Prayag Katharotiya and he joined the business.</span>
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}
