import React from 'react'

//importing css
import './cart.css'

import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

//importing images
import ProductImg from '../../assets/almodpng.png'

//importing mui icons
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function Cart() {
  return (
    <>
    <Navbar></Navbar>
      <div className='cart'>
         <div className='cartTitle'>
             <span className='heading'>Shopping Cart</span> 
             <hr className='line'></hr>           
         </div>
        <table className='cartContainer' >
           <tr>
             <th>Products</th>
             <th>Price</th>
             <th>Quantity</th>
             <th>Total</th>
           </tr>

           <tr>
            <td>
              <div className='qntProductItem'>
                <img src={ProductImg} className='qntProductImg'></img>
                <div className='productDetails'>
                  <span className='qntProductText'>High Protine Dark almod butter</span>
                  <div className='productDesc'>
                    <span className='productVarient'>variant: natural</span>
                    <span className='productSize'>size: 500gm</span>
                  </div>
                </div>
              </div>
            </td>
            <td>
             <div className='qntPrizeItem'>
              <span className='qntProductPrize'>Rs. 379</span>
              <span className='orgPrice'>Rs. 399</span>
             </div>
            </td>
            <td>
              <div className='productQnt'>
                <button className='minBtn'><RemoveIcon></RemoveIcon></button>
                <span className='numQty'>1</span>
                <button className='plusBtn'><AddIcon></AddIcon></button>
              </div>
            </td>
            <td>
             <span className='totalPrice'>Rs. 399</span>
            </td>
    
             
           </tr>


           <tr>
            <td>
              <div className='qntProductItem'>
                <img src={ProductImg} className='qntProductImg'></img>
                <div className='productDetails'>
                  <span className='qntProductText'>High Protine Dark almod butter</span>
                  <div className='productDesc'>
                    <span className='productVarient'>variant: natural</span>
                    <span className='productSize'>size: 500gm</span>
                  </div>
                </div>
              </div>
            </td>
            <td>
             <div className='qntPrizeItem'>
              <span className='qntProductPrize'>Rs. 379</span>
              <span className='orgPrice'>Rs. 399</span>
             </div>
            </td>
            <td>
              <div className='productQnt'>
                <button className='minBtn'><RemoveIcon></RemoveIcon></button>
                <span className='numQty'>1</span>
                <button className='plusBtn'><AddIcon></AddIcon></button>
              </div>
            </td>
            <td>
             <span className='totalPrice'>Rs. 399</span>
            </td>
    
             
           </tr>


        </table>

        <div className='grandTotal'>
           <div className='totalPriceDesc'>
                 <div className='totalPriceDiv'>
                  <span className='subTotal'>Subtotal:</span>
                  <span className='subTotal'>Rs. 789</span>
                 </div>
                 <div className='totalPriceDiv'>
                   <span className='totalSaving'>Total Saving:</span>
                   <span className='totalSaving'>Rs. 79</span>
                 </div>
           </div>
           <div className='checkOutBtn'>
             <button className='continue'>Continue Shopping</button>
             <button className='checkOut'>Checkout</button>
           </div>

        </div>
            
      </div>
    <Footer></Footer>
    </>
  )
}
