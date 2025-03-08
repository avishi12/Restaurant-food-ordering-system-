import React from 'react'
import './Booking.css'
import { Await } from 'react-router-dom';
import axios from 'axios';

function Booking () {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        contactNumber: '',
        date: '',
        time: '',
        numberOfGuests: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log('Form data submitted:', formData);

    try {
      const response = await axios.post(
          "http://localhost:8100/api/v1/recievations/addrecivation",
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
          console.log(response.data); 
      }
  } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form!");
  }

  };
  return (
    <div className="acbackground"> 
    <div className="booking-container">
      
      <h2>Book a Table</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Phone:</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
          </div>
        <div className="form-group">
          <label htmlFor="numberOfGuests">Number of Guests:</label>
          <input
            type="number"
            id="numberOfGuests"
            name="numberOfGuests"
            value={formData.numberOfGuests}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
    </div>
  );
}
  

export default Booking