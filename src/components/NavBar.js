import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/logo192.png";
import {Link} from 'react-router-dom';

function NavBar() {
    return (
  
  
      <Navbar expand="lg" className="bg-body-tertiary">
      
        <Navbar.Brand href="#home"><img src={logo} className='my-auto' height={'30px'} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <ul>
              <li>
                <Nav.Link href="#link" className='ms-auto'>login</Nav.Link>
                <Nav.Link to='/bookingpage' href="bookingpage">booking page</Nav.Link>
                <Nav.Link to='/chicago' href="chicago">about us</Nav.Link>
                <Nav.Link to='/customerssay' href="customerssay">testimonials</Nav.Link>
                <Nav.Link to='/specials' href="specials">specials</Nav.Link>
                <Nav.Link to='/header' href="header">header</Nav.Link>
                <Nav.Link to='/homepage' href="Homepage">HomePage</Nav.Link>
              </li>

            </ul>
            
            
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  
  
    )
  }
  
  
  export default NavBar;