
import React from 'react';
import PropTypes from 'prop-types'; 

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import "./navigation-bar.scss"
const styles = {
  border: '3px solid red', 
};




export const ZFNavigationBar = ({dark=true, brandName, left, center, right })=>{
  return(
    <Container fluid>
      <Navbar bg={dark?'dark':'light'} variant={dark?'dark':'light'} expand="lg">
        <Container fluid>
          {brandName?<Navbar.Brand href="#">{brandName}</Navbar.Brand>:''}
          <Navbar.Toggle/>
          <Navbar.Collapse className='justify-content-between'>
              <Nav>{left}</Nav>
              <Nav>{center}</Nav>
              <Nav>{right}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
    
  )
}



ZFNavigationBar.PropTypes={
  dark:PropTypes.bool,
  brandName: PropTypes.string,
  left: PropTypes.object,
  center: PropTypes.object,
  right: PropTypes.object
}