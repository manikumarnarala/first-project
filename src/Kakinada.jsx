import React, { useEffect } from 'react'
import img1 from './branches/kkd img1.jpeg' 
import img2 from './branches/kkd img2.jpg'
import img4 from './branches/kkd img4.jpg'
import img6 from './header/back3.jpg'
import Carousel from 'react-bootstrap/Carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Kakinada() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100vw', overflow: 'hidden',marginTop:'0' }}>
      {/* Blurred background image */}
      <div
        style={{
          backgroundImage: `url(${img6})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(10px)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      {/* Foreground content */}
      <div style={{ position: 'relative', zIndex: 1, padding: '2rem' }}>
        <h4
          style={{
            color: '#2c3e50',
            fontWeight: 'bold',
            marginTop: '20px',
            marginBottom: '20px',
            letterSpacing: '1px',
            textShadow: '2px 2px 8px #fff'
          }}
          data-aos="fade-down"
        >
          Welcome to the Kakinada Branch!
        </h4><br/>
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}
          data-aos="fade-up"
        >
          <div style={{ flex: '0 0 700px', maxWidth: '100%' }} data-aos="zoom-in-right">
            <Carousel interval={3000} controls={true} indicators={true}>
              <Carousel.Item>
                <img
                  src={img1}
                  style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
                  alt="Kakinada Branch 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={img2}
                  style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
                  alt="Kakinada Branch 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={img4}
                  style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
                  alt="Kakinada Branch 3"
                />
              </Carousel.Item>
            </Carousel>
            <br />
          </div>
          <div
            style={{
              flex: 1,
              background: '',
              borderRadius: '10px',
              padding: '2rem',
              boxShadow: '0 4px 24px rgba(44,62,80,0.10)'
            }}
            data-aos="fade-left"
          >
            <h5 style={{ color: '#2980b9', marginBottom: '12px', fontWeight: 'bold' }}>About Our Restaurant</h5>
            <p style={{ color: 'black', fontWeight: 'bold', marginTop: '20px', marginBottom: '20px', letterSpacing: '1px' }}>
              The Kakinada Restaurant is renowned for its authentic flavors and warm hospitality. Located in the heart of the city, it offers a delightful culinary experience with a menu that celebrates both local and international cuisines. Our chefs use the freshest ingredients to craft dishes that are both delicious and visually appealing.<br />
              The ambiance is cozy and inviting, making it perfect for family gatherings, business lunches, or casual dining with friends. We pride ourselves on our attentive service and commitment to customer satisfaction. Whether you crave traditional Andhra delicacies or contemporary favorites, our restaurant has something for everyone.
              Visit us to enjoy a memorable meal and discover why we are a favorite dining destination in Kakinada.
            </p>
            <ul style={{ color: '#2c3e50', fontWeight: 'bold', marginTop: '20px', marginBottom: '20px', letterSpacing: '1px' }}>
              <li>Spacious and comfortable premises</li>
              <li>Friendly and knowledgeable staff</li>
              <li>Convenient location in the heart of Kakinada</li>
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
          <li>Spice Garden Family Restaurant</li>
          <li>D.No. 12-3-45, Ground Floor, Beside Reliance Trends, Main Road, Rama Rao Peta, Kakinada – 533004, Andhra Pradesh, India</li>
          <li>Phone: +91-98765 43210</li>
          <li>Open Hours: 11:00 AM – 11:00 PM</li>
          <li style={{ marginTop: '10px' }}><b>Click on "Click Me" to get live location of our restaurant</b></li>
        </ul>
        <br />
        <a
          href="https://www.google.com/maps/dir//Subbayya+Gari+Bojanam+Hotel+Old+and+Orignal+%7C+Famous+Hotel+in+Kakinada,+subbayya+hotel+junction,+Rama+Rao+Peta,+Kakinada,+Andhra+Pradesh+533004/@16.9640068,82.2255258,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a38298cbafc6761:0x11788b4755362239!2m2!1d82.2278125!2d16.9640625?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <button
            type="button"
            style={{ padding: '10px 20px' }}
            className="btn btn-info"
            data-aos="zoom-in"
          >
            Click Me
          </button>
        </a>
      </div>
    </div>
  )
}

export default Kakinada