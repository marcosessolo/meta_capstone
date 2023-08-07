
import React from 'react';


import Header from "./Header";
import CallToAction from './CallToAction';
import Chicago from './Chicago';
import CustomersSay from './CustomersSay';
import Specials from './Specials';

function HomePage(){
    return(

         <>
        <Header />
        <Specials />
        <CallToAction />
        <Chicago />
        <CustomersSay />
        <BookingPage />
        </>
    )
};

export default HomePage;