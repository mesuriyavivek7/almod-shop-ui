import React from "react";

import './App.css'

import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from './pages/home/Home'
import Cart from "./pages/cart/Cart";
import Store from "./pages/store/Store";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
           <Routes>
             <Route path="/" element={<Home></Home>}></Route>
             <Route path="/cart" element={<Cart></Cart>}></Route>
             <Route path="/store" element={<Store></Store>}></Route>
             <Route path="/about" element={<About></About>}></Route>
             <Route path="/contact" element={<Contact></Contact>}></Route>
           </Routes>
           
        </BrowserRouter>
    </div>
  );
}

export default App;
