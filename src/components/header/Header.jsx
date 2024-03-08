import React from 'react'

//importing css
import './header.css'

//importing image
import Almod from '../../assets/almod.png'

//importing navbar
import Navbar from '../navbar/Navbar'
export default function Header() {
  return (
    <div className='header'>
       <Navbar></Navbar>
      <div className='headerContainer'>
       <div className='headerContent'>
         <span className='headerText text1'>
           Best almod butter with <span className='headerlogo'>fuelflex's</span>  <br></br>
           give you amaze experience
         </span>
         <button className='headerBtn'>Explore Store</button>
       </div>
       
       <div className='headerDesign'>
         <img className='headerImg' src={Almod} alt=''></img>
       </div>
      </div>

    </div>
  )
}
