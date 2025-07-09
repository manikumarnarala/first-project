import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faUtensils, faPhone, faTable, faCodeBranch, faAddressCard, faCartShopping, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './Menu.css';

function Menu({ cartItems }) {
  const backgroundColor = "linear-gradient(90deg, #ff9966 0%, #ff5e62 100%)";
  const location = useLocation();
  const [clicked, setClicked] = useState('');

  const handleNavClick = (name) => {
    setClicked(name);
    setTimeout(() => setClicked(''), 300);
  };

  // ✅ Count total quantity in cart
  const totalCartQuantity = cartItems.reduce((sum, item) => {
    return sum + (item.quantity || 1);
  }, 0);

  const isActive = (path) => location.pathname === path;

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ background: backgroundColor, boxShadow: '0 4px 24px rgba(255,94,98,0.15)' }}>
        <div className="container-fluid">
          <span className="navbar-brand"></span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link${isActive('/home') ? ' active' : ''} ${clicked === 'home' ? 'nav-clicked' : ''}`} to="/" onClick={() => handleNavClick('home')}>
                  <FontAwesomeIcon icon={faHouseChimney} /><b> Home</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link${isActive('/menuitems') ? ' active' : ''} ${clicked === 'menuitems' ? 'nav-clicked' : ''}`} to="/menuitems" onClick={() => handleNavClick('menuitems')}>
                  <FontAwesomeIcon icon={faUtensils} /><b> Menu items</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link${isActive('/contact') ? ' active' : ''} ${clicked === 'contact' ? 'nav-clicked' : ''}`} to="/contact" onClick={() => handleNavClick('contact')}>
                  <FontAwesomeIcon icon={faPhone} /><b> Contact</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link${isActive('/bookingtable') ? ' active' : ''} ${clicked === 'bookingtable' ? 'nav-clicked' : ''}`} to="/bookingtable" onClick={() => handleNavClick('bookingtable')}>
                  <FontAwesomeIcon icon={faTable} /><b> Booking Table</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link${isActive('/Aboutus') ? ' active' : ''} ${clicked === 'aboutus' ? 'nav-clicked' : ''}`} to="/Aboutus" onClick={() => handleNavClick('aboutus')}>
                  <FontAwesomeIcon icon={faAddressCard} /><b> About Us</b>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className={`nav-link dropdown-toggle${isActive('/branches') ? ' active' : ''} ${clicked === 'branches' ? 'nav-clicked' : ''}`} to="/branches" role="button" data-bs-toggle="dropdown" onClick={() => handleNavClick('branches')}>
                  <FontAwesomeIcon icon={faCodeBranch} /> <b> Branches</b>
                </Link>
                <ul className="dropdown-menu bg-secondary">
                  <li><Link className="dropdown-item" to="/branches/kakinada"><FontAwesomeIcon icon={faLocationDot} /> Kakinada(AP)</Link></li>
                  <li><Link className="dropdown-item" to="/branches/bhimavaram"><FontAwesomeIcon icon={faLocationDot} /> Bhimavaram(AP)</Link></li>
                  <li><Link className="dropdown-item" to="/branches/hyderabad"><FontAwesomeIcon icon={faLocationDot} /> Hyderabad(TS)</Link></li>
                  <li><Link className="dropdown-item" to="/branches/karimnagar"><FontAwesomeIcon icon={faLocationDot} /> Karimnagar(TS)</Link></li>
                </ul>
              </li>
            </ul>

            {/* Search form */}
            <form className="d-flex me-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

            {/* Cart Icon with Badge */}
            <ul className="navbar-nav">
              <li className="nav-item position-relative">
                <Link className={`nav-link btn-danger ${clicked === 'cart' ? 'nav-clicked' : ''}`} to="/cart" onClick={() => handleNavClick('cart')}>
                  <FontAwesomeIcon icon={faCartShopping} beat />
                  <b> Cart</b>
                  {totalCartQuantity > 0 && (
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark d-flex align-items-center justify-content-center"
                      style={{
                        transform: 'translate(-60%, -30%)',
                        fontSize: '16px',
                        fontWeight: '600',
                        padding: '6px 10px',
                        minWidth: '30px',
                        height: '28px',
                        boxShadow: '0 0 6px rgba(0,0,0,0.25)'
                      }}
                    >
                      {totalCartQuantity}
                    </span>

                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Cart hover & active styles */}
      <style>{`
        .nav-link {
          transition: background 0.2s, color 0.2s, box-shadow 0.2s;
          border-radius: 8px;
          margin-right: 4px;
          font-weight: 500;
        }
        .nav-link.active, .nav-link:hover {
          background: #fff3;
          color: #191654 !important;
          box-shadow: 0 2px 8px rgba(255,94,98,0.10);
        }
        .nav-clicked {
          animation: navPop 0.3s;
          background: #FFD93D !important;
          color: #191654 !important;
          box-shadow: 0 4px 16px #FFD93D55;
        }
        @keyframes navPop {
          0% { transform: scale(1);}
          50% { transform: scale(1.13) rotate(-2deg);}
          100% { transform: scale(1);}
        }
      `}</style>

      <Outlet />
    </div>
  );
}

export default Menu;
