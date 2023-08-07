import React from 'react';
import logo from "../assets/logo192.png";
import {Route, Routes, Link} from 'react-router-dom';

function Footer() {
    return (
      <footer className='container-fluid mt-5' >
       <div className='row text-center'>
          <div className='col-1 my-auto'>
              <img src={logo} alt="logo" height={'30px'} />
          </div>
          <div className='col-3'>
            <ul className=' text-center'>
              <li>
              <Link className=' text-center footer-css' to='/header' href="header">header</Link>
              </li>
              <li>
              <Link className=' footer-css' to='/specials' href="specials">specials</Link>
              </li>
              <li>
              <Link className=' footer-css' to='/customerssay' href="customerssay">testimonials</Link>
              </li>
              <li>
              <Link className=' footer-css' to='/chicago' href="chicago">about us</Link>
              </li>
            </ul>
          </div>
          <div className='col-4'>
            <h3>Contact</h3>
            <h4>Little Lemon Restaurant <br/></h4>
            <p>1028 Point Street <br/></p>
            <p>Chicago <br/></p>
            <p> Illinois<br/></p>
            <p>60640 <br/></p>
            <p>708-663-8824 <br/></p>
           
          </div>
          <div className='col-4'>
            <h3>Follow us on our social media!</h3>

          </div>
       </div>
     
      </footer>
    )
}

export default Footer;