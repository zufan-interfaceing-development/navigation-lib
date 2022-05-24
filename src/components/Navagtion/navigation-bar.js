
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar({dark=true, brandName, left, center, right }){
  return(
    <Navbar bg={dark?'dark':'light'} variant={dark?'dark':'light'} expand="lg">
        <Container fluid> 
            <Nav>
              {brandName? <Navbar.Brand href="#">{brandName}</Navbar.Brand>:''}
              <Navbar.Collapse>
                {left}
              </Navbar.Collapse>
            </Nav>
            <Nav className="justify-content-center">
              <Navbar.Collapse>
                {center}
              </Navbar.Collapse>
            </Nav>
            <Nav className="justify-content-end">
              <Navbar.Collapse>
                {right}
              </Navbar.Collapse>
            </Nav>
            <Navbar.Toggle/>
        </Container>
    </Navbar>
  )
}


function NavItems ({lable, onClick, style}){
  return <Nav.Link style={style} onClick={onClick}>{lable}</Nav.Link>
}


function DropDownItem({lable, title}){
  return(
    <Nav>
      <NavDropdown title={title} menuVariant="dark"  >
        {lable.map((v, i)=>{
          return  <NavDropdown.Item key={i} onClick={v.onClick}>{v.lable}</NavDropdown.Item>
        })}
      </NavDropdown>
    </Nav>
  )
}

export {NavigationBar, NavItems, DropDownItem}


