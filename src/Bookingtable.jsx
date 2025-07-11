import React, { useState, useEffect } from 'react'
import './Booking.css';
import img1 from './header/back2.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Bookingtable() {
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <section className='booking' style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Blurred background image */}
      <div
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(5px)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
        data-aos="fade"
      />
      {/* Foreground content */}
      <div style={{ position: 'relative', zIndex: 1 }} data-aos="zoom-in">
        <h1 data-aos="fade-down">Book A Table</h1>
        <p data-aos="fade-up">Book Your Table By Filling This Form And Enjoy The Food..!</p>
        {!booked ? (
          <form onSubmit={handleSubmit} data-aos="flip-up">
            <input type='number' className='form-control' placeholder='Number Of Guests' required />
            <br />
              {/* Branch selection */}
            <select className='form-control' required style={{ marginBottom: '1rem' }}>
              <option value="" disabled selected>Select Branch</option>
              <option>Kakinada (AP)</option>
              <option>Bhimavaram (AP)</option>
              <option>Hyderabad (TS)</option>
              <option>Karimnagar (TS)</option>
            </select><br/>
            {/* Number of guests with limit */}
            <select className='form-control' required>
              <option value="" disabled selected>Select Meal</option>
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
            </select>
            <br />
            <input type='number' className='form-control' placeholder='Phone Number' required /><br />
            <textarea className='form-control' placeholder='Message' rows='4'></textarea>
            <button
              className='form-control submit-btn btn-info'
              type='submit'
              style={{
                backgroundColor: '#17a2b8',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                padding: '10px 0',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginTop: '10px',
                textAlign: 'center',
                textDecoration: 'none'
              }}
              data-aos="zoom-in"
            >
              Submit
            </button>
          </form>
        ) : (
          <h2 style={{ color: '#17a2b8', marginTop: '20px' }} data-aos="fade-up">Your table is booked!</h2>
        )}
      </div>
    </section>
  )
}

export default Bookingtable