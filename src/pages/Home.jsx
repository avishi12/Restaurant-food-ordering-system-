import React, { useEffect, useState } from 'react';
import { MenuBtn } from '../components/MenuBtn';
import './Home.css';
import AboutImg from '../utils/img/about-img.jpg';
import { Link } from 'react-router-dom';
import { ImageGallery } from '../components/ImageGallery';
import { ContactInfo } from '../components/ContactInfo';
import ContactImage from '../utils/img/contact-img.jpg';
import axios from 'axios';

function Home() {

    const [favfoods, setFavfoods] = useState([]);
    const [favdrinks, setFavdrinks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch favFoods from the API using axios
        const fetchFavfoods = async () => {
            try {
                const response = await axios.get('http://localhost:8100/api/v1/foods/getfavouritefoods');
                setFavfoods(response.data); 
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFavfoods();
    }, []);

    useEffect(() => {
        // Fetch favDrinks from the API using axios
        const fetchFavdrinks = async () => {
            try {
                const response = await axios.get('http://localhost:8100/api/v1/drinks/getfavouritedrinks');
                setFavdrinks(response.data); 
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFavdrinks();
    }, []);

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    // if (error) {
    //     return <div className="text-center text-danger">Error: {error}</div>;
    // }
    
    return (
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
                            <h2 className='mb-0 text-black fw-bold'>Welcome To</h2>
                            <h1 className='mb-5 text-black fw-bold text-center text-sm-start'>Golden Hour Cafe</h1>
                            <MenuBtn />
                        </div>
                    </div>
                </div>
            </header>

            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                        <img src={AboutImg} className='img-fluid w-50' alt="about img" />
                    </div>
                    <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                        <h2 className='fs-1 mb-5 text-uppercase fw-bold'>About Us</h2>
                        <p>At Golden Hour Cafe, we believe that every meal should be an experience to cherish. 
                            Nestled in the heart of our city, our cafe offers a serene and enchanting atmosphere 
                            where you can savor delicious meals crafted with love and the finest ingredients. Whether 
                            you're joining us for a hearty breakfast, a leisurely lunch, or a cozy dinner, our menu is
                            designed to delight your senses.Our dedication to excellence extends beyond our dishes;
                            we are passionate about creating a warm and welcoming environment where you can relax and
                            unwind. From the first sip of your morning coffee to the last bite of dessert, we aim to make
                            every moment at Golden Hour Cafe truly special.

                            Come join us and bask in the beauty of the Golden Hour, where unforgettable memories are made and exquisite flavors are savored.</p>
                        
                        <Link to="/about">
                            <button type='button' className='btn btn-outline-success btn-lg'>More About Us</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='menu-section py-5 text-light shadow'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Our Favorites</h2>
                    <div className='row mb-5 w-100'>
                        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                            <h3 className='fs-2 mb-5'>Food</h3>
                            <ul className='px-0'>
                            
                            {favfoods.map((food, index) => (
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>{food.name}</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>{food.price}</p>
                                </li>
                            ))}
                            </ul>
                        </div>
                        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                            <h3 className='fs-2 mb-5'>Drinks</h3>
                            <ul className='px-0'>
                            {favdrinks.map((drink, index) => (
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>{drink.name}</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>{drink.price}</p>
                                </li>
                            ))}
                            </ul>
                        </div>
                    </div>
                    <MenuBtn />
                </div>
            </div>

            <ImageGallery />

            <div className='bg-dark text-light py-5 shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0'>
                            <ContactInfo />
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={ContactImage} className='img-fluid w-50' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;