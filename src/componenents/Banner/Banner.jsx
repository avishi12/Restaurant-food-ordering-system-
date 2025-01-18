import React from 'react'
import './Banner.css';
import Restaurantimg from '../Assests/cafe.jpeg'
export const Banner = () => {
    return ( <div className="banner"> 
    <h1>THE BEST PLACE TO KICK OFF YOUR DAY</h1> 
    <div className="banner-buttons"> 
        <button className="order-now">Order Now</button> 
        <button className="view-menu">View Menu</button> 
        <img src={Restaurantimg} alt="restaurant" className='restimg' />
        </div> 
    </div> );
}
export default Banner;