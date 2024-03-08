import React from 'react'


//importing css
import './insta.css'

//importing icons
import InstagramIcon from '@mui/icons-material/Instagram';

//importing images
import Insta1 from '../../assets/insta1.jpg'
import Insta2 from '../../assets/insta2.jpg'
import Insta3 from '../../assets/insta3.jpg'
import Insta4 from '../../assets/insta4.jpg'
import Insta5 from '../../assets/insta5.jpg'
import Insta6 from '../../assets/insta6.jpg'
import Insta7 from '../../assets/insta7.jpg'
import Insta8 from '../../assets/insta8.jpg'
import Insta9 from '../../assets/insta9.jpg'

export default function Insta() {
  return (
    <div className='insta'>
       <div className='instaTitle'>
            <span className='heading'>Follow Us On Instagram @fuelflex</span>
       </div>

       <div className='instaContainer'>
          <div className='instaItem'>
              <img src={Insta1} alt='' className='instaImg'></img>
              <div className='overlay'>
                  <InstagramIcon className='instaIcon'></InstagramIcon>
              </div>
          </div>
          <div className='instaItem'>
              <img src={Insta2} alt='' className='instaImg'></img>
              <div className='overlay'>
                  <InstagramIcon className='instaIcon'></InstagramIcon>
              </div>
          </div>
          <div className='instaItem'>
              <img src={Insta3} alt='' className='instaImg'></img>
              <div className='overlay'>
                  <InstagramIcon className='instaIcon'></InstagramIcon>
              </div>
          </div>
          <div className='instaItem'>
              <img src={Insta4} alt='' className='instaImg'></img>
              <div className='overlay'>
                  <InstagramIcon className='instaIcon'></InstagramIcon>
              </div>
          </div>
          <div className='instaItem'>
              <img src={Insta5} alt='' className='instaImg'></img>
              <div className='overlay'>
                  <InstagramIcon className='instaIcon'></InstagramIcon>
              </div>
          </div>
          <div className='instaItem'>
              <img src={Insta6} alt='' className='instaImg'></img>
              <div className='overlay'>
                  <InstagramIcon className='instaIcon'></InstagramIcon>
              </div>
          </div>
          <div className='instaItem'>
              <img src={Insta7} alt='' className='instaImg'></img>
              <div className='overlay'>
                  <InstagramIcon className='instaIcon'></InstagramIcon>
              </div>
          </div>
          <div className='instaItem'>
              <img src={Insta8} alt='' className='instaImg'></img>
              <div className='overlay'>
                  <InstagramIcon className='instaIcon'></InstagramIcon>
              </div>
          </div>
          <div className='instaItem'>
              <img src={Insta9} alt='' className='instaImg'></img>
              <div className='overlay'>
                  <InstagramIcon className='instaIcon'></InstagramIcon>
              </div>
          </div>
          
       </div>
    </div>
  )
}
