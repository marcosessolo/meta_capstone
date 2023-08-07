import {Route, Routes} from 'react-router-dom';
import React from 'react';

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import Chicago from './components/Chicago';
import CustomersSay from './components/CustomersSay';
import Specials from './components/Specials';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <>
      <NavBar />

      <Routes>
        
        <Route path='/header' element={<Header />}>  </ Route>
        <Route path='/specials' element={<Specials />}></ Route>
        <Route path='/chicago' element={<Chicago />}></ Route>
        <Route path='/customerssay' element={<CustomersSay />}></ Route>
        <Route path='/bookingpage' element={<BookingPage />}></ Route>
        <Route path='/confirmedbooking' element={<ConfirmedBooking />}></Route>
      </Routes>

      <Footer />
    </>
  );
};

export default App;
