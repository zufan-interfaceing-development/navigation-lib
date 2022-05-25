import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function ZFNavigationBar({
  dark = true,
  brandName,
  left,
  center,
  right
}) {
  return /*#__PURE__*/React.createElement(Container, {
    fluid: true
  }, /*#__PURE__*/React.createElement(Navbar, {
    bg: dark ? 'dark' : 'light',
    variant: dark ? 'dark' : 'light',
    expand: "lg"
  }, /*#__PURE__*/React.createElement(Container, {
    fluid: true
  }, brandName ? /*#__PURE__*/React.createElement(Navbar.Brand, {
    href: "#"
  }, brandName) : '', /*#__PURE__*/React.createElement(Navbar.Toggle, null), /*#__PURE__*/React.createElement(Navbar.Collapse, {
    className: "justify-content-between"
  }, /*#__PURE__*/React.createElement(Nav, null, left), /*#__PURE__*/React.createElement(Nav, null, center), /*#__PURE__*/React.createElement(Nav, null, right)))));
}

function ZFNavItems({
  lable,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement(Nav.Link, {
    style: {
      padding: 5
    },
    onClick: onClick
  }, lable);
}

function ZFDropDownItem({
  lable,
  title
}) {
  return /*#__PURE__*/React.createElement(NavDropdown, {
    title: title,
    menuVariant: "dark"
  }, lable.map((v, i) => {
    return /*#__PURE__*/React.createElement(NavDropdown.Item, {
      key: i,
      onClick: v.onClick
    }, v.lable);
  }));
}

export { ZFDropDownItem, ZFNavItems, ZFNavigationBar };
