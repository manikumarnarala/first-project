import React, { useEffect } from 'react'
import img1 from './branches/b-21.jpg' 
import img6 from './header/back2.jpg'
import img2 from './branches/b-23.jpg'
import img3 from './branches/b-24.jpg'
import Carousel from 'react-bootstrap/Carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Bhimavaram() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Blurred background image */}
      <div
        style={{
          backgroundImage: `url(${img6})`,
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
      />
      {/* Foreground content */}
      <div style={{ position: 'relative', zIndex: 1, padding: '2rem' }}>
        <h4
          style={{ color: '#2c3e50', fontWeight: 'bold', marginTop: '20px', marginBottom: '20px', letterSpacing: '1px' }}
          data-aos="fade-down"
        >
          Welcome to the Bhimavaram Branch!
        </h4><br/>
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} data-aos="fade-up">
          <div style={{ flex: '0 0 700px' }} data-aos="zoom-in-right">
            <Carousel interval={3000} controls={true} indicators={true}>
              <Carousel.Item>
                <img
                  src={img1}
                  style={{ width: '700px', height: '400px', objectFit: 'cover', borderRadius: '15px' }}
                  alt="Bhimavaram Branch 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={img2}
                  style={{ width: '700px', height: '400px', objectFit: 'cover', borderRadius: '15px' }}
                  alt="Bhimavaram Branch 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={img3}
                  style={{ width: '700px', height: '400px', objectFit: 'cover', borderRadius: '15px' }}
                  alt="Bhimavaram Branch 3"
                />
              </Carousel.Item>
            </Carousel>
            <br />
          </div>
          <div style={{ flex: 1 }} data-aos="fade-left">
            <h5 style={{ color: 'ThreeDFace', marginBottom: '12px' }}>About Our Restaurant</h5>
            <p>
              <b style={{ color: 'black', fontWeight: 'bold', marginTop: '20px', marginBottom: '20px', letterSpacing: '1px' }}>
                The Bhimavaram Restaurant is renowned for its authentic flavors and warm hospitality. Located in the heart of the city, it offers a delightful culinary experience with a menu that celebrates both local and international cuisines. Our chefs use the freshest ingredients to craft dishes that are both delicious and visually appealing.<br />
                The ambiance is cozy and inviting, making it perfect for family gatherings, business lunches, or casual dining with friends. We pride ourselves on our attentive service and commitment to customer satisfaction. Whether you crave traditional Andhra delicacies or contemporary favorites, our restaurant has something for everyone.
                Visit us to enjoy a memorable meal and discover why we are a favorite dining destination in Bhimavaram.
              </b>
            </p>
            <ul style={{ color: 'black', fontWeight: 'bold', marginTop: '20px', marginBottom: '20px', letterSpacing: '1px' }}>
              <li>Spacious and comfortable premises</li>
              <li>Friendly and knowledgeable staff</li>
              <li>Convenient location in the heart of Bhimavaram</li>
              <li>Wide range of services and amenities</li>
            </ul>
          </div>
        </div>
        <br />
        <ul
          style={{
            background: 'rgba(255,255,255,0.92)',
            borderRadius: '12px',
            padding: '1rem',
            color: '#2c3e50',
            fontWeight: 'bold',
            boxShadow: '0 2px 8px rgba(44,62,80,0.10)'
          }}
          data-aos="fade-up"
        >
          <li>Fire Up The Grill</li>
          <li>D.No. 12-3-45, Ground Floor, Beside Reliance Trends, Main Road, Rama Rao Peta, Bhimavaram – 533004, Andhra Pradesh, India</li>
          <li>Phone: +91-98765 43210</li>
          <li>Open Hours: 10:00 AM – 10:00 PM</li>
          <li style={{ marginTop: '10px' }}><b>click on "click me" to get live location of our restuarent</b></li>
        </ul>
        <br />
        <button
          type="button"
          style={{ padding: '10px 20px' }}
          className="btn btn-info"
          data-aos="zoom-in"
          onClick={() => window.open('https://www.google.com/maps/dir//16.55915,81.50083/@16.5591338,81.4184282,25432m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D', '_blank', 'noopener,noreferrer')}
        >
          Click Me
        </button>
      </div>
    </div>
  )
}

export default Bhimavaram