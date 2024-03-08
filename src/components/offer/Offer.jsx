import React from 'react'

//importing css
import './offer.css'


//import images
import AlmodItem from '../../assets/almodpng.png'


export default function Offer() {
  return (
    <div className='offer'>
        <div className='offerTitle'>
            <span className='heading'>Best Offer</span>
            <hr className='line'></hr>
        </div>
        <div className='offerContainer'>
            <div  className='offerItem offerOne'>
                <div className='offerImgSec'>
                     <img className='offerImg' src={AlmodItem} alt=''></img>
                </div>
                <div className='offerContent'>
                    <div className='offerHead'>
                       <h1 className='offerValue'><span className='offerValNum'>18</span>% off</h1>
                    </div>
                    <span className='offerCat'>100% Natural</span>
                    <span className='offerPrice'><span className='innerItalic'>from</span> Rs.249</span>
                    <button className='btn'>See More</button>
                </div>
            </div>
            <div  className='offerItem offerTwo'>
                <div className='offerImgSec'>
                     <img className='offerImg' src={AlmodItem} alt=''></img>
                </div>
                <div className='offerContent'>
                    <div className='offerHead'>
                       <h1 className='offerValue'><span className='offerValNum'>15</span>% off</h1>
                    </div>
                    <span className='offerCat'>Creamy</span>
                    <span className='offerPrice'><span className='innerItalic'>from</span> Rs.249</span>
                    <button className='btn'>See More</button>
                </div>
            </div>
            <div  className='offerItem offerThree'>
                <div className='offerImgSec'>
                     <img className='offerImg' src={AlmodItem} alt=''></img>
                </div>
                <div className='offerContent'>
                    <div className='offerHead'>
                       <h1 className='offerValue'><span className='offerValNum'>25</span>% off</h1>
                    </div>
                    <span className='offerCat'>Crunchy</span>
                    <span className='offerPrice'><span className='innerItalic'>from</span> Rs.249</span>
                    <button className='btn'>See More</button>
                </div>
            </div>
            <div className='offerItem offerFour'>
                <div className='offerImgSec'>
                     <img className='offerImg' src={AlmodItem} alt=''></img>
                </div>
                <div className='offerContent'>
                    <div className='offerHead'>
                       <h1 className='offerValue'><span className='offerValNum'>20</span>% off</h1>
                    </div>
                    <span className='offerCat'>Hazelnut</span>
                    <span className='offerPrice'><span className='innerItalic'>from</span> Rs.249</span>
                    <button className='btn'>See More</button>
                </div>
            </div>


        </div>
    </div>
  )
}
