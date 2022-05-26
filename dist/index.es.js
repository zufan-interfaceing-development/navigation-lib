import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const ZFNavigationBar = ({
  dark = false,
  brandName,
  left,
  center,
  right
}) => {
  dark = dark ? 'dark' : 'light';
  const textColor = dark == 'dark' ? '#f7f7f7' : '#292b2c';
  return /*#__PURE__*/React.createElement(Navbar, {
    bg: dark,
    variant: dark,
    expand: "lg"
  }, /*#__PURE__*/React.createElement(Container, {
    fluid: true,
    style: {
      color: textColor
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
