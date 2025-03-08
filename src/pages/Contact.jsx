import React, { useState } from 'react';
import './Contact.css';
import { ContactInfo } from '../components/ContactInfo';
import { Form } from 'react-bootstrap';
import { Reviews } from '../components/Reviews';
import axios from "axios";

function Contact() {
    const [formData, setFormData] = useState({
        
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        date: "",
        numberOfGuests: "",
        comment: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);

        try {
            const response = await axios.post(
                "http://localhost:8100/api/v1/reviews/savereview",
                formData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.status === 200) {
                window.location.reload();
                alert("Form submitted successfully!");
                console.log(response.data); // Server's response
                
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to submit the form!");
        }
    };

    return (
        <div className='contact-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Contact</h1>
                </div>
            </header>

            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                        <ContactInfo />
                    </div>
                    <div className='col-lg-6 d-flex justify-content-center'>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='first-name'>First Name</Form.Label>
                                    <Form.Control
                                        type='text'
                                        id='firstName'
                                        name='firstName'
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='last-name'>Last Name</Form.Label>
                                    <Form.Control
                                        type='text'
                                        id='lastName'
                                        name='lastName'
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='email-address'>Email Address</Form.Label>
                                    <Form.Control
                                        type='email'
                                        id='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='phone-number'>Phone Number</Form.Label>
                                    <Form.Control
                                        type='tel'
                                        id='contactNumber'
                                        name='contactNumber'
                                        value={formData.contactNumber}
                                        onChange={handleChange}
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='date'>Date</Form.Label>
                                    <Form.Control
                                        type='date'
                                        id='date'
                                        name='date'
                                        value={formData.date}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='guests-number'>Number Of Guests</Form.Label>
                                    <Form.Control
                                        type='number'
                                        id='numberOfGuests'
                                        name='numberOfGuests'
                                        value={formData.numberOfGuests}
                                        onChange={handleChange}
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group className='mb-4'>
                                <Form.Label htmlFor='comments'>Comments</Form.Label>
                                <Form.Control
                                    as='textarea'
                                    id='comment'
                                    name='comment'
                                    value={formData.comment}
                                    onChange={handleChange}
                                    rows={3}
                                />
                            </Form.Group>

                            <button type='submit' className='btn btn-success btn-lg'>Submit</button>
                        </Form>
                    </div>
                </div>
            </div>

            <div className='bg-dark text-light py-5'>
                <Reviews />
            </div>
        </div>
    )
}

export default Contact;