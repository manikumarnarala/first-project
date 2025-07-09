import './App.css';
import React from 'react';
import Footer from './Footer';
import {BrowserRouter,Route, Routes }from 'react-router-dom';
import Menu from './Menu';
import Menuitems from './Menuitems'
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
import Curries from './Curries'
import Nonveg from './Nonveg';
function App() {
  return (
    
    <BrowserRouter>
  <Header/>
    <Routes>
      <Route path='/' exact element={<Menu/>}>
      <Route path='/' index exact element={<Home/>}></Route>
      <Route path='menuitems' exact element={<Menuitems/>}></Route>
      <Route path='veg' exact element={<Veg/>}></Route>
      <Route path='Nonveg' exact element={<Nonveg/>}></Route>
      <Route path='Staters' exact element={<Staters/>}></Route>
      <Route path='Curries' exact element={<Curries/>}></Route> 


      <Route path='contact' exact element={<Contact/>}></Route>
      <Route path='bookingtable' exact element={<BookingTable/>}></Route>
      <Route path='branches' exact element={<Branches/>}>
            <Route path='kakinada' exact element={<Kakinada/>}></Route>
            <Route path='bhimavaram' exact element={<Bhimavaram/>}></Route>
            <Route path='hyderabad' exact element={<Hyderabad/>}></Route>
            <Route path='karimnagar' exact element={<Karimnagar/>}></Route>
      </Route>
        <Route path='Aboutus' exact element={<AboutUs />}></Route>
        <Route path='cart' exact element={<Cart/>}></Route>
      </Route>
    </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
