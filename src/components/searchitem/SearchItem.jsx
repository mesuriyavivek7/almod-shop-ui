import React from 'react'


//importing css
import './searchItem.css'

//importing images
import Almod from '../../assets/almodpng.png'

export default function SearchResult() {
  return (
    <div className='searchItem'>
        <img className='searchItemImg' src={Almod}></img>
        <div className='searchProductDesc'>
           <span className='searchProductTitle'>High protine chocolate almod butter</span>
           <div className='searchProductPrice'>
              <span className='ProductPrice'>Rs. 399</span>
              <span className='orgPrice'>Rs. 478</span>
           </div>
        </div>
    </div>
  )
}
