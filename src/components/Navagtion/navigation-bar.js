
import React from 'react';
import PropTypes from 'prop-types'; 

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ZFNavigationBar = ({dark=true, brandName, left, center, right })=>{
  return(
    
      <Navbar bg={dark?'dark':'light'} variant={dark?'dark':'light'} expand="lg">
       <Container fluid style={{border: '3px solid red'}}>
          {brandName?<Navbar.Brand href="#">{brandName}</Navbar.Brand>:''}
          <Navbar.Toggle/>
          <Navbar.Collapse className='justify-content-between'>
              <Nav>{left}</Nav>
              <Nav>{center}</Nav>
              <Nav>{right}</Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
   
    
  )
}

ZFNavigationBar.PropTypes={
  dark:PropTypes.bool,
  brandName: PropTypes.string,
  left: PropTypes.object,
  center: PropTypes.object,
  right: PropTypes.object
}