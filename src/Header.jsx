import React from 'react'
import './Header.css'
import img2 from './header/images/img1.webp'
import logo from './header/bg.png'

function Header() {
  return (
    <div
      style={{
        backgroundImage: `url(${img2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '2rem 0',
        marginBottom: 0
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px'
      }}>
        <img
          src={logo}
          alt="Logo"
          style={{ width: '70px', height: '70px', borderRadius: '50%', boxShadow: '0 2px 8px #aaa' }}
        />
        <h1 style={{
          textAlign: 'center',
          color: 'black',
          fontFamily: 'Eras Bold ITC',
          margin: 0
        }}>
          Fire Up The Grill
        </h1>
      </div>
    </div>
  )
}

export default Header