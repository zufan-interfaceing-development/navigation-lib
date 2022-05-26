
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'; 

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ZFNavigationBar = ({dark, brand, brandLink, navBarBackgroundColor, brandOnClick, left, center, right, textColor = dark =='dark'? '#f7f7f7': '#292b2c'})=>{
  const[darkMode, setDarkMode]=useState()
  const[textsColor, setTextsColor]=useState()
  const[navBgColor, setNavBgColor]=useState()
  
  useEffect(()=>{
    if (navBarBackgroundColor || navBarBackgroundColor>0){
      setNavBgColor(navBarBackgroundColor)
      setDarkMode();
    }else{
      dark=dark?'dark':'light';
      setNavBgColor()
      setDarkMode(dark);
    }
    if (textColor=='')textColor=dark =='dark'? '#f7f7f7': '#292b2c';
    setTextsColor(textColor)
  },[dark, navBarBackgroundColor, textColor])
  

  const style = {
    navContainer: {
      backgroundColor: navBgColor
    },
    txtColor:{
      color:textsColor
    }
  }

  return(
      <Navbar bg={darkMode} variant={darkMode} expand="lg" style={style.navContainer}>
       <Container style={style.txtColor? style.txtColor:''}>
       <Navbar.Brand href={brandLink} onClick={brandOnClick}>{brand}</Navbar.Brand>
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

ZFNavigationBar.PropTypes= {
  dark:PropTypes.bool,
  brand : PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  brandLink: PropTypes.string,
  brandOnClick: PropTypes.func,
  navBarBackgroundColor: PropTypes.string,
  left: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  center: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  right: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  textColor: PropTypes.string,
}



