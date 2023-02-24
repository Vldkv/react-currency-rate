import {} from 'bootstrap'
import React, { Component } from 'react'
import { Container, Navbar, NavLink, Nav,} from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { Route } from 'react-router'
import logo from '../currency-exchange-logo.svg'
import { BrowserRouter as Router, Routes } from 'react-router-dom'


import Home from '../Pages/Home'
import About from '../Pages/About'



class Header extends Component {
  render() {
    return (
        <>

      <Router>
        <Routes>
            <Route exact path="/Home" element={<Home/>}/>
            <Route exact path="/About" element={<About/>}/>
        </Routes>
      </Router>
        
      <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant='dark' >
        <Container>
            <Navbar.Brand href="/Home">

                <img 
                    src={logo}
                    height="30"
                    width="30"
                    className='d-inline-block align-top'
                    alt='logo'
                >
                </img>
            </Navbar.Brand>
    
            <NavbarToggle aria-controls='responsive-navbar-nav'></NavbarToggle>
            <NavbarCollapse id='responsive-navbar-nav'>
                <Nav className="mr-auto">
                  <Nav.Link as={NavLink} href="/Home">Home</Nav.Link>
                  <Nav.Link as={NavLink} href="/About">About</Nav.Link>
                </Nav>
            </NavbarCollapse>

        </Container>
      </Navbar>
      </>
    )
  }
}

export default Header;
