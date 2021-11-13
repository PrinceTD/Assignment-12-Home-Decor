import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css"
import useAuth from '../../../hooks/useAuth';
import { Button } from '@mui/material';
import { Box } from '@mui/system';


const Header = () => {
  const { user, logOut } = useAuth();
  
  return (
    <Navbar style={{ backgroundColor: "coral", fontWeight: '700' }} expand="lg">
      <Container>
        <Link style={{fontWeight: '700', fontSize: '20px'}} className='nav-bar' to="/home">HOME DECOR</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className='nav-bar' to="/home">Home</Link>
            <Link className='nav-bar' to="/about">About</Link>
            <Link className='nav-bar' to="/service">Service</Link>
            <Link className='nav-bar' to="/contact">Contact</Link>
            {
              user.email ? <Box>
                <Link className='nav-bar' to="/dashboard">Dashboard</Link>
               
                <Link className="nav-bar"><button onClick={logOut} className='border-0'>SignOut</button></Link>
              </Box> :
                <Link className='nav-bar' to="/login">Sign In</Link>
            }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;