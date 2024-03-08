import React from 'react'


//import css
import './product.css'


//importing images
import Almod from '../../assets/almodpng.png'

export default function Products() {
  return (
    <div className='products'>
         <div className='productTitle'>
            <span className='heading'>Top Products</span>
            <hr className='line'></hr>
        </div>
        <div className='productContainer'>
            <div className='productItem'>
                <img src={Almod} alt='' className='productImg'></img>
                <div className='productContent'>
                   <span className='productText'>crunchy crispy almod butter</span>
                   <span className='productPrice'>Rs. 425/Kg <span className='orgPrice'>Rs. 499/Kg</span></span>
                   <select className='productDropdown'>
                     <option value="300">Crunchy / 250g</option>
                     <option value="500">Crunchy / 500g</option>
                     <option value="300">Creamy / 250g</option>
                     <option value="500">Creamy / 500g</option>
                   </select>
                   <button className='productBtn'>Add to cart</button>
                </div>
            </div>
            <div className='productItem'>
                <img src={Almod} alt='' className='productImg'></img>
                <div className='productContent'>
                   <span className='productText'>crunchy crispy almod butter</span>
                   <span className='productPrice'>Rs. 425/Kg <span className='orgPrice'>Rs. 499/Kg</span></span>
                   <select className='productDropdown'>
                     <option value="300">Crunchy / 250g</option>
                     <option value="500">Crunchy / 500g</option>
                     <option value="300">Creamy / 250g</option>
                     <option value="500">Creamy / 500g</option>
                   </select>
                   <button className='productBtn'>Add to cart</button>
                </div>
            </div>
            <div className='productItem'>
                <img src={Almod} alt='' className='productImg'></img>
                <div className='productContent'>
                   <span className='productText'>crunchy crispy almod butter</span>
                   <span className='productPrice'>Rs. 425/Kg <span className='orgPrice'>Rs. 499/Kg</span></span>
                   <select className='productDropdown'>
                     <option value="300">Crunchy / 250g</option>
                     <option value="500">Crunchy / 500g</option>
                     <option value="300">Creamy / 250g</option>
                     <option value="500">Creamy / 500g</option>
                   </select>
                   <button className='productBtn'>Add to cart</button>
                </div>
            </div>
            <div className='productItem'>
                <img src={Almod} alt='' className='productImg'></img>
                <div className='productContent'>
                   <span className='productText'>crunchy crispy almod butter</span>
                   <span className='productPrice'>Rs. 425/Kg <span className='orgPrice'>Rs. 499/Kg</span></span>
                   <select className='productDropdown'>
                     <option value="300">Crunchy / 250g</option>
                     <option value="500">Crunchy / 500g</option>
                     <option value="300">Creamy / 250g</option>
                     <option value="500">Creamy / 500g</option>
                   </select>
                   <button className='productBtn'>Add to cart</button>
                </div>
            </div>
            <div className='productItem'>
                <img src={Almod} alt='' className='productImg'></img>
                <div className='productContent'>
                   <span className='productText'>crunchy crispy almod butter</span>
                   <span className='productPrice'>Rs. 425/Kg <span className='orgPrice'>Rs. 499/Kg</span></span>
                   <select className='productDropdown'>
                     <option value="300">Crunchy / 250g</option>
                     <option value="500">Crunchy / 500g</option>
                     <option value="300">Creamy / 250g</option>
                     <option value="500">Creamy / 500g</option>
                   </select>
                   <button className='productBtn'>Add to cart</button>
                </div>
            </div>
            <div className='productItem'>
                <img src={Almod} alt='' className='productImg'></img>
                <div className='productContent'>
                   <span className='productText'>crunchy crispy almod butter</span>
                   <span className='productPrice'>Rs. 425/Kg <span className='orgPrice'>Rs. 499/Kg</span></span>
                   <select className='productDropdown'>
                     <option value="300">Crunchy / 250g</option>
                     <option value="500">Crunchy / 500g</option>
                     <option value="300">Creamy / 250g</option>
                     <option value="500">Creamy / 500g</option>
                   </select>
                   <button className='productBtn'>Add to cart</button>
                </div>
            </div>
            <div className='productItem'>
                <img src={Almod} alt='' className='productImg'></img>
                <div className='productContent'>
                   <span className='productText'>crunchy crispy almod butter</span>
                   <span className='productPrice'>Rs. 425/Kg <span className='orgPrice'>Rs. 499/Kg</span></span>
                   <select className='productDropdown'>
                     <option value="300">Crunchy / 250g</option>
                     <option value="500">Crunchy / 500g</option>
                     <option value="300">Creamy / 250g</option>
                     <option value="500">Creamy / 500g</option>
                   </select>
                   <button className='productBtn'>Add to cart</button>
                </div>
            </div>
            <div className='productItem'>
                <img src={Almod} alt='' className='productImg'></img>
                <div className='productContent'>
                   <span className='productText'>crunchy crispy almod butter</span>
                   <span className='productPrice'>Rs. 425/Kg <span className='orgPrice'>Rs. 499/Kg</span></span>
                   <select className='productDropdown'>
                     <option value="300">Crunchy / 250g</option>
                     <option value="500">Crunchy / 500g</option>
                     <option value="300">Creamy / 250g</option>
                     <option value="500">Creamy / 500g</option>
                   </select>
                   <button className='productBtn'>Add to cart</button>
                </div>
            </div>
        </div>
        <button className='productEndBtn'>Explore Store</button>
    </div>
  )
}
