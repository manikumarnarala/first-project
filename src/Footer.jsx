import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import{ faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
function Footer() {
  return (
    <div style={{ margin: 0, border: 0 }}>
      <footer className="bg-dark color-white text-center py-3">
        <p style={{ color: 'white' }}>© 2023 Grill Recipes. All rights reserved.</p>
        <p style={{ color: 'white' }}>Follow us on:
          <a href="https://www.facebook.com" className="text-white mx-2"><FontAwesomeIcon icon={faFacebook} /> Facebook</a>
          <a href="https://www.twitter.com" className="text-white mx-2"><FontAwesomeIcon icon={faTwitter} /> Twitter</a>
          <a href="https://www.instagram.com" className="text-white mx-2"><FontAwesomeIcon icon={faSquareInstagram} /> Instagram</a>
        </p>
      </footer>
    </div>
  )
}

export default Footer