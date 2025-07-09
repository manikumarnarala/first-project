import './App.css';
import React, { useState } from 'react';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import Menuitems from './Menuitems';
import Home from './Home';
import Contact from './Contact';
import BookingTable from './Bookingtable';
import Branches from './Branches';
import AboutUs from './Aboutus';
import Kakinada from './Kakinada';
import Bhimavaram from './Bhimavaram';
import Hyderabad from './Hyderabad';
import Karimnagar from './Karimnagar';
import Cart from './Cart';
import Header from './Header';
import Veg from './Veg';
import Staters from './Staters';
import Curries from './Curries';
import Nonveg from './Nonveg';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Add to cart
  const addToCart = (item) => {
    const existingItem = cartItems.find((i) => i.title === item.title);
    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((i) =>
          i.title === item.title ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCartItems((prev) => [...prev, { ...item, quantity: 1 }]);
    }
  };

  // ✅ Remove from cart
  const removeFromCart = (title) => {
  setCartItems((prevItems) => {
    return prevItems.flatMap(item => {
      if (item.title === title) {
        if ((item.quantity || 1) > 1) {
          // Decrease quantity by 1
          return { ...item, quantity: item.quantity - 1 };
        } else {
          // Remove item completely if quantity is 1
          return [];
        }
      }
      return item;
    });
  });
};

  // ✅ Update quantity (this was missing and caused your error)
  const updateQuantity = (title, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.title === title ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Menu cartItems={cartItems} addToCart={addToCart} />}>
          <Route index element={<Home />} />
          <Route path="menuitems" element={<Menuitems />} />
          <Route path="veg" element={<Veg addToCart={addToCart} />} />
          <Route
            path="Nonveg"
            element={<Nonveg addToCart={addToCart} updateQuantity={updateQuantity} />}
          />
          <Route
            path="/staters"
            element={<Staters addToCart={addToCart} updateQuantity={updateQuantity} />}
          />
          <Route
            path="/curries"
            element={<Curries addToCart={addToCart} updateQuantity={updateQuantity} />}
          />
          <Route path="contact" element={<Contact />} />
          <Route path="bookingtable" element={<BookingTable />} />
          <Route path="branches" element={<Branches />}>
            <Route path="kakinada" element={<Kakinada />} />
            <Route path="bhimavaram" element={<Bhimavaram />} />
            <Route path="hyderabad" element={<Hyderabad />} />
            <Route path="karimnagar" element={<Karimnagar />} />
          </Route>
          <Route path="Aboutus" element={<AboutUs />} />
          <Route
            path="cart"
            element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />}
          />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
