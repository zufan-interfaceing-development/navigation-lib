
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function ZFNavigationBar({dark=true, brandName, left, center, right }){
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



function ZFNavItems ({lable, onClick, style}){
  return <Nav.Link style={{padding:5}} onClick={onClick}>{lable}</Nav.Link>
}


function ZFDropDownItem({lable, title}){
  return(
    
      <NavDropdown title={title} menuVariant="dark"  >
        {lable.map((v, i)=>{
          return  <NavDropdown.Item key={i} onClick={v.onClick}>{v.lable}</NavDropdown.Item>
        })}
      </NavDropdown>
   
  )
}

export {ZFNavigationBar, ZFNavItems, ZFDropDownItem}


