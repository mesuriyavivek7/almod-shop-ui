import React from 'react'

//importing components
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'


//importing css
import './product.css'

export default function Product() {
  return (
    <>
    <Navbar></Navbar>
    <div className='product'>
       <div className='productContainer'>
           <div className='productSlider'>
              
           </div>
           <div className='productInfo'>
             
           </div>
       </div>
    </div>
    <Footer></Footer>
   </>
  )
}
