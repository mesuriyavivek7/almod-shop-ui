import React from 'react'

//importing css 
import './store.css'

//importing images
import Almod from '../../assets/almodpng.png'

//importing require components
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

//importing mui icons
import SearchIcon from '@mui/icons-material/Search';

export default function Store() {
  return (
    <>
    <Navbar></Navbar>
    <div className='store'>
        <div className='storeTitle'>
            <span className='heading'>Our Store</span>
            <hr className='line'></hr>
        </div>
        <div className='storeContainer'>
        <div className='filterSec'>
           <h2 className='filterHead'>Filter</h2>
           <div className='filterItem'>
             <span className='filterItemHead'>Price</span>
             <div className='filterBody'>
                <div className='filterInputBox'>
                  <span className='inputText'>min:</span>
                  <input min={0} className='filterInput' placeholder='0' type='number'></input>
                </div>
                <div className='filterInputBox'>
                  <span className='inputText'>max:</span>
                  <input min={0} className='filterInput' placeholder='999' type='number'></input>
                </div>
             </div>
           </div>
           <div className='filterItem'>
            <span className='filterItemHead'>Qnt</span>
            <div className='filterBody'>
               <div className='filterInputBox'>
                 <span className='inputText'>Price/gram:</span>
                 <select className='filterInput'>
                   <option>200gm</option>
                   <option>350gm</option>
                   <option>500gm</option>
                   <option>1kg</option>
                 </select>
               </div>
            </div>
           </div>
           <div className='filterItem'>
            <span className='filterItemHead'>Variety</span>
            <div className='filterVarietyBody'>
              <div className='filterInputBox'>
                <input className='filterCheckBox' type='checkbox' checked></input>
                <span className='filterText'>Natural</span>
              </div>
              <div className='filterInputBox'>
                <input className='filterCheckBox' type='checkbox' checked></input>
                <span className='filterText'>Creamy</span>
              </div>
              <div className='filterInputBox'>
                <input className='filterCheckBox' type='checkbox' checked></input>
                <span className='filterText'>Crunchy</span>
              </div>
              <div className='filterInputBox'>
                <input className='filterCheckBox' type='checkbox' checked></input>
                <span className='filterText'>Hazelnut</span>
              </div>
            </div>
           </div>
           <button className='resetBtn'>Reset</button>
        </div>


        <div className='productSec'>
             <div className='storeSearch'>
               <SearchIcon></SearchIcon>
               <input type='text' placeholder='what are you looking for?' className='storeSearchInputBox'></input>
            </div>
            <div className='storeProductContainer'>
        
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
        </div>
       </div>

    </div>
    <Footer></Footer>
    </>
  )
}
