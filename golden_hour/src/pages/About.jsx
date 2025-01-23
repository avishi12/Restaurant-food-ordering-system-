import React from 'react';
import './About.css';
import AboutChef1 from '../utils/img/about-chef1.jpg';
import AboutChef2 from '../utils/img/about-chef2.jpg';
import { ImageGallery } from '../components/ImageGallery';
import { Reviews } from '../components/Reviews';

function About() {
    return (
        <div className='about-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>About</h1>
                </div>
            </header>

            <div className='container my-5'>
                <p>At Golden Hour Cafe, we believe that every meal should be an experience to cherish.
                     Nestled in the heart of our city, our cafe offers a serene and enchanting atmosphere 
                     where you can savor delicious meals crafted with love and the finest ingredients. 
                     Whether you're joining us for a hearty breakfast, a leisurely lunch, or a cozy dinner,
                     our menu is designed to delight your senses.Our dedication to excellence extends beyond our dishes;
                     we are passionate about creating a warm and welcoming environment where you can relax and unwind. 
                     From the first sip of your morning coffee to the last bite of dessert, we aim to make every moment at 
                     Golden Hour Cafe truly special.Come join us and bask in the beauty of the Golden Hour, where unforgettable 
                     memories are made and exquisite flavors are savored.</p>
                <p><b>
                What Our Customers Say</b></p> <p>"A gem in the city! The ambiance is beautiful, and the food is simply divine." - Maria R.</p>
                <p>"The perfect spot for breakfast, lunch, or dinner. Always a delightful experience!" - John D.</p>
                <p>"Golden Hour Cafe has become our go-to place for special occasions. The staff is friendly, and the food never disappoints." - Sarah L. </p>    
                

                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={AboutChef1} className='img-fluid my-4' alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <img src={AboutChef2} className='img-fluid my-4' alt="" />
                    </div>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, esse nulla, debitis similique, ad nihil architecto maiores doloribus quis blanditiis distinctio. Praesentium, harum atque fuga nobis eius laboriosam totam consequuntur officia dolorem quo velit incidunt fugiat at maxime, molestias esse dignissimos accusantium enim debitis. Id et quidem sapiente adipisci dolor ipsa amet tempora porro atque perferendis. Libero odio, molestiae aliquam modi facere, veritatis, illo labore deserunt ducimus ipsam rem ipsum perspiciatis eveniet maiores excepturi. Architecto sit ducimus inventore officia porro vel? Accusantium recusandae nisi autem iste suscipit distinctio, libero rem.</p>
            </div>

            <div className='bg-dark text-light'>
                <ImageGallery />
            </div>

            <div className='my-5'>
                <Reviews />
            </div>
        </div>
    )
}

export default About;
