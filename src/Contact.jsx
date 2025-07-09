import React, { useEffect } from 'react'
import './Contact.css';
import img1 from './header/images/masala.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className='bg-auto-info'
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem 0',
      }}
    >
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
        data-aos="zoom-out-up"
      />
      {/* Foreground content */}
      <div style={{ position: 'relative', zIndex: 1, width: '100%' }} data-aos="zoom-in">
        <h2 style={{ color: 'white', marginBottom: '1.5rem', textAlign: 'center' }} data-aos="fade-down">Contact Us</h2>
        <form
          style={{
            background: 'rgba(255,255,255,0.95)',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 4px 24px rgba(67,198,172,0.25)',
            maxWidth: '400px',
            width: '100%',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
          }}
          data-aos="flip-up"
        >
          {/* ...form fields as before... */}
          <div style={{ textAlign: 'left' }}>
            <label htmlFor="name" style={{ color: '#333', fontWeight: 'bold' }}>Name:</label><br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full name"
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '6px',
                border: '1px solid #43c6ac',
                outline: 'none',
                marginTop: '0.3rem',
              }}
              data-aos="fade-right"
            />
          </div>
          <div style={{ textAlign: 'left' }}>
            <label htmlFor="email" style={{ color: '#333', fontWeight: 'bold' }}>Email:</label><br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Maild"
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '6px',
                border: '1px solid #43c6ac',
                outline: 'none',
                marginTop: '0.3rem',
              }}
              data-aos="fade-left"
            />
          </div>
          <div style={{ textAlign: 'left' }}>
            <label htmlFor="message" style={{ color: '#333', fontWeight: 'bold' }}>Message:</label><br />
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Write your message"
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '6px',
                border: '1px solid #43c6ac',
                outline: 'none',
                marginTop: '0.3rem',
                resize: 'vertical',
              }}
              data-aos="fade-up"
            ></textarea>
          </div>
          <button
            className="btn btn-primary"
            style={{
              background: 'linear-gradient(90deg, #43c6ac 0%, #191654 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              padding: '0.7rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background 0.3s',
            }}
            data-aos="zoom-in"
          >
            submit
          </button>
        </form>
        <br />
        <p
          style={{
            color: '#fff',
            background: 'rgba(25,22,84,0.7)',
            borderRadius: '10px',
            padding: '1rem 2rem',
            maxWidth: '600px',
            margin: '1rem auto 0',
            boxShadow: '0 2px 8px rgba(25,22,84,0.15)',
            textAlign: 'center'
          }}
          data-aos="fade-up"
        >
          If you have any questions, suggestions, or feedback, feel free to reach out to us. We're here to help you!<br />
          Phone: +91-XXXXXXXXXX<br />
          Email: support@example.com<br />
          Address: 123, Main Street, Hyderabad, Telangana, India – 500001<br />
          You can also follow us on social media or use the form below to get in touch. We usually respond within 24 hours!
        </p>
      </div>
    </div>
  )
}

export default Contact