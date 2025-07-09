import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img2 from './header/images/img2.jpg'
import img3 from './header/images/img3.jpg'
import manch from './header/images/manch.jpg'

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div style={{ background: 'linear-gradient(135deg,rgb(112, 156, 200) 0%,rgb(200, 172, 61) 100%)', minHeight: '100vh', padding: '30px 0' }}>
      <Carousel
        data-bs-theme="dark"
        fade
        interval={3500}
        indicators={true}
        nextLabel=""
        prevLabel=""
        style={{ maxWidth: '900px', margin: '0 auto', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(60,60,120,0.18)' }}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: '600px', objectFit: 'cover', filter: 'brightness(0.85)' }}
            src={img2}
            alt="First slide"
          />
          <Carousel.Caption style={{ background: 'rgba(0,0,0,0.45)', borderRadius: '12px', padding: '18px 28px', left: '10%', right: '10%' }}>
            <h3 style={{ fontWeight: 700, color: '#fff', textShadow: '2px 2px 8px #222' }}>Where every flavor tells a story..</h3>
            <p style={{ fontWeight: 500, color: '#f8fafc', fontSize: '1.2rem' }}>Serving happiness on every plate..</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: '600px', objectFit: 'cover', filter: 'brightness(0.85)' }}
            src={img3}
            alt="Second slide"
          />
          <Carousel.Caption style={{ background: 'rgba(0,0,0,0.45)', borderRadius: '12px', padding: '18px 28px', left: '10%', right: '10%' }}>
            <h3 style={{ fontWeight: 700, color: '#fff', textShadow: '2px 2px 8px #222' }}>A taste you’ll never forget.</h3>
            <p style={{ fontWeight: 500, color: '#f8fafc', fontSize: '1.2rem' }}>From our kitchen to your heart..</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: '600px', objectFit: 'cover', filter: 'brightness(0.85)' }}
            src={manch}
            alt="Third slide"
          />
          <Carousel.Caption style={{ background: 'rgba(0,0,0,0.45)', borderRadius: '12px', padding: '18px 28px', left: '10%', right: '10%' }}>
            <h3 style={{ fontWeight: 700, color: '#fff', textShadow: '2px 2px 8px #222' }}>Spice up your life, one bite at a time...</h3>
            <p style={{ fontWeight: 500, color: '#f8fafc', fontSize: '1.2rem' }}>Flavors that speak louder than words...</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <br /><hr style={{ borderTop: '2px solid #a5b4fc', width: '80%', margin: '32px auto' }} />
      <div
        data-aos="fade-up"
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          background: 'rgba(255,255,255,0.85)',
          borderRadius: '14px',
          padding: '32px',
          boxShadow: '0 2px 12px rgba(60,60,120,0.08)'
        }}
      >
        <p style={{ fontWeight: 600, fontSize: '1.18rem', color: '#373737', lineHeight: 1.7 }}>
          Food is more than just fuel; it's a celebration of culture, tradition, and emotion. Every dish tells a story — of flavors carefully blended, ingredients chosen with care, and recipes passed down through generations. Whether it’s the comforting warmth of a
           homemade curry, the crispy delight of street snacks, or the rich aroma of slow-cooked biryani, food has the power to bring people together, create memories, and awaken the senses. At our restaurant,
          we don’t just serve meals — we serve experiences that nourish both body and soul..
        </p>
      </div>
    </div>
  )
}

export default Home