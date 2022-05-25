
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default ZFNavigationBar = ({dark=true, brandName, left, center, right })=>{
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