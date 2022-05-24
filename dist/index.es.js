import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar({
  dark = true,
  brandName,
  left,
  center,
  right
}) {
  return /*#__PURE__*/React.createElement(Navbar, {
    bg: dark ? 'dark' : 'light',
    variant: dark ? 'dark' : 'light',
    expand: "lg"
  }, /*#__PURE__*/React.createElement(Container, {
    fluid: true
  }, /*#__PURE__*/React.createElement(Nav, null, brandName ? /*#__PURE__*/React.createElement(Navbar.Brand, {
    href: "#"
  }, brandName) : '', /*#__PURE__*/React.createElement(Navbar.Collapse, null, left)), /*#__PURE__*/React.createElement(Nav, {
    className: "justify-content-center"
  }, /*#__PURE__*/React.createElement(Navbar.Collapse, null, center)), /*#__PURE__*/React.createElement(Nav, {
    className: "justify-content-end"
  }, /*#__PURE__*/React.createElement(Navbar.Collapse, null, right)), /*#__PURE__*/React.createElement(Navbar.Toggle, null)));
}

function NavItems({
  lable,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement(Nav.Link, {
    style: style,
    onClick: onClick
  }, lable);
}

function DropDownItem({
  lable,
  title
}) {
  return /*#__PURE__*/React.createElement(Nav, null, /*#__PURE__*/React.createElement(NavDropdown, {
    title: title,
    menuVariant: "dark"
  }, lable.map((v, i) => {
    return /*#__PURE__*/React.createElement(NavDropdown.Item, {
      key: i,
      onClick: v.onClick
    }, v.lable);
  })));
}

export { DropDownItem, NavItems, NavigationBar };
