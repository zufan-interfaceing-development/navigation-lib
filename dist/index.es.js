import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const ZFNavigationBar = ({
  dark = true,
  brandName,
  left,
  center,
  right
}) => {
  return /*#__PURE__*/React.createElement(Navbar, {
    bg: dark ? 'dark' : 'light',
    variant: dark ? 'dark' : 'light',
    expand: "lg"
  }, /*#__PURE__*/React.createElement(Container, {
    fluid: true,
    style: {
      border: '3px solid red'
    }
  }, brandName ? /*#__PURE__*/React.createElement(Navbar.Brand, {
    href: "#"
  }, brandName) : '', /*#__PURE__*/React.createElement(Navbar.Toggle, null), /*#__PURE__*/React.createElement(Navbar.Collapse, {
    className: "justify-content-between"
  }, /*#__PURE__*/React.createElement(Nav, null, left), /*#__PURE__*/React.createElement(Nav, null, center), /*#__PURE__*/React.createElement(Nav, null, right))));
};
ZFNavigationBar.PropTypes = {
  dark: PropTypes.bool,
  brandName: PropTypes.string,
  left: PropTypes.object,
  center: PropTypes.object,
  right: PropTypes.object
};

export { ZFNavigationBar };
