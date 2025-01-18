import React from 'react'
import './Navbar.css';


const Navbar = () => {
    return ( <nav className="App-nav">
         <ul> 
            <li><a href="#home">Home</a></li>
             <li><a href="#about">About</a></li> 
             <li><a href="#menu">Menu</a></li>
              <li><a href="#blog">Blog</a></li> 
              <li><a href="#contact">Contact</a></li> 
              <li><button className="book-table">Book a table</button></li>
               </ul>
                </nav> );
}
export default Navbar;