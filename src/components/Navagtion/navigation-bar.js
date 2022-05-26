
import React from 'react';
import PropTypes from 'prop-types'; 

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ZFNavigationBar = ({dark=false, brandName, left, center, right })=>{
  dark=dark?'dark':'light'
  const textColor = dark =='dark'? '#f7f7f7': '#292b2c'
  return(
      <Navbar bg={dark} variant={dark} expand="lg">
       <Container fluid style={{color:textColor}}>
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