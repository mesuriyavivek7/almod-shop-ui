import React from 'react'

//importing css
import './contact.css'

import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

export default function Contact() {
  return (
   <>
    <Navbar></Navbar>
    <div className='contact'>
       <div className='contactContainer'>
         <div className='contactInfo'>
           <div className='contactHead'>
             <h2 className='contactHeadText'>Say Hello (:</h2>
           </div>

          <div className='contactContent'>
            <span className='infoText'><span className='infoHead'>Company</span> - First Unified Pvt Ltd</span>
            <span className='infoText'><span className='infoHead'>Email</span> - fuelflexindia@gmail.com</span>
            <span className='infoText'><span className='infoHead'>Phone</span> - +91 92650 67663</span>
            <span className='infoText'><span className='infoHead'>Corporate Office</span> - Anushruti Tower, Near Binory Hotel,Sg Highway Ahmedabad-380052</span>
            <span className='infoText'><span className='infoHead'>Manufacturing Unit</span> - 197 - Amrut Udhyognagar, Nr diamond nagar,Surat Kamrej road,kholvad surat</span>
            <span className='infoText'><span className='infoHead'>working days</span> - Monday to Sunday</span>
            <span className='infoText'><span className='infoHead'>Timing</span> - 9am to 6pm</span>
          </div>

        </div>
        <div className='contactForm'>
          
           <form>
              <div className='formHead'>
                 <span className='formHeadText'>
                   Feel free to fill this contact form to get in touch with our team.
                 </span>
              </div>
              <input className='contactInputBox' type='text' placeholder='*Name'></input>
              <input className='contactInputBox' type='text' placeholder='*Email'></input>
              <input className='contactInputBox' type='text' placeholder='*Phone Number'></input>
              <input className='contactInputBox' type='text' placeholder='*Area/City'></input>
              <input className='contactInputBox' type='text' placeholder='Country'></input>
              <input  className='contactInputBox' type='text' placeholder='*Meassage'></input>
              <button type='submit' className='contactBtn'>SUBMIT</button>
           </form>
        </div>
       </div>
    </div>
    <Footer></Footer>
    </>
  )
}
