import React, { useState } from 'react'

//importing css
import './navbar.css'

import { useEffect } from 'react';

import { Link } from 'react-router-dom'

//importing icons
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import SearchResult from '../searchitem/SearchItem';


export default function Navbar() {
  
  const [navShow,setNavShow]=useState(true)
  const [maxScroll,setMaxScroll]=useState(0)

  const handleScroll=()=>{
    const scrollposition=window.scrollY
    // setScroll(scrollposition)
    if(scrollposition>maxScroll){
      setNavShow(false)
    }else{
      setNavShow(true)
    }
    setMaxScroll(scrollposition)

   }

  

  useEffect(()=>{
    
      window.addEventListener("scroll",handleScroll)
      return ()=>{
        window.removeEventListener("scroll",handleScroll)
      }
    
  },[maxScroll])

  //code for responsive navbar
  let mobileview=(window.innerWidth<=768)?true:false
  const [mobile,setMobile]=useState(mobileview)
  const [menuOpen,setMenuOpen]=useState(false)
  // const handleMobile=()=>{
  //    console.log(window.innerWidth)
  //    if(window.innerWidth<=768){
  //      console.log("Mobile mode is on")
  //      setMobile(true)
  //    }else{
  //     console.log("mobiel mode is off")
  //      setMobile(false)
  //    }
  // }

  // useEffect(()=>{
  //   window.addEventListener("resize",handleMobile)
  //   return ()=>{
  //     window.removeEventListener("resize",handleMobile)
  //   }
  // },[])

  //for search icon open and close

  const [searchOpen,setSearchOpen]=useState(false)

  return (
    <div className={navShow===false?'navbar navbar-hide':'navbar'}>
       <div className='logo' >
        <Link to='/' style={{textDecoration:'none'}}><h1 className='navhead' >fuelflex.</h1></Link>
       </div>

       <div className={(mobile===true && menuOpen===true)?"menubar open":"menubar"}>

          {
            mobile && <button className='navBtn'>Login / Register</button>
          }

          <Link className='menuItem' to='/'>home</Link>
          <Link to='/store' className='menuItem'>our store</Link>
          <Link to='/about' className='menuItem'>about us</Link>
          <Link to='/contact' className='menuItem'>contact us</Link>
       </div>
       <div className='navIcon'>
          
          {
            !mobile && <button className='navBtn'>Login / Register</button>
          }
          

          <SearchIcon onClick={()=>setSearchOpen(!searchOpen)} className='searchIcon'></SearchIcon>
          <Link to='/cart'>
            <div className='shoppingCart'>
               <ShoppingCartOutlinedIcon className='navCart'></ShoppingCartOutlinedIcon>
               <span className='cartItem'>2</span>
            </div>
          </Link>

         
          {
            mobile && (
            (menuOpen===true)?(<CloseIcon onClick={()=>setMenuOpen(!menuOpen)} className='closeIcon'></CloseIcon>):(<MenuIcon onClick={()=>setMenuOpen(!menuOpen)} className='menuIcon'></MenuIcon>) )
            
          }
          
          
       </div>
       {

        searchOpen &&
        <div className='searchSec'>
          <CloseIcon style={{color:"gray"}} onClick={()=>setSearchOpen(!searchOpen)} className='SearchCloseIcon'></CloseIcon>
          <h1 className='searchTitle'>
             Search
          </h1>
         <div className='inputBox'>
           <SearchIcon style={{color:"gray",paddingLeft:".3rem"}} ></SearchIcon>
           <input className='searchInput' type='text' placeholder='What are you looking for?'></input>
         </div>
         <div className='searchResult'>
           <SearchResult></SearchResult>
           <SearchResult></SearchResult>
         </div>
         <div className='searchBtnSec'>
            <button className='viewAllBtn'>View All</button>
         </div>
       </div>

       }
       
    </div>
  )
}
