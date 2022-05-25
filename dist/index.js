'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Container = require('react-bootstrap/Container');
var Navbar = require('react-bootstrap/Navbar');
var Nav = require('react-bootstrap/Nav');
var NavDropdown = require('react-bootstrap/NavDropdown');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Container__default = /*#__PURE__*/_interopDefaultLegacy(Container);
var Navbar__default = /*#__PURE__*/_interopDefaultLegacy(Navbar);
var Nav__default = /*#__PURE__*/_interopDefaultLegacy(Nav);
var NavDropdown__default = /*#__PURE__*/_interopDefaultLegacy(NavDropdown);

function ZFNavigationBar({
  dark = true,
  brandName,
  left,
  center,
  right
}) {
  return /*#__PURE__*/React__default["default"].createElement(Container__default["default"], {
    fluid: true
  }, /*#__PURE__*/React__default["default"].createElement(Navbar__default["default"], {
    bg: dark ? 'dark' : 'light',
    variant: dark ? 'dark' : 'light',
    expand: "lg"
  }, /*#__PURE__*/React__default["default"].createElement(Container__default["default"], {
    fluid: true
  }, brandName ? /*#__PURE__*/React__default["default"].createElement(Navbar__default["default"].Brand, {
    href: "#"
  }, brandName) : '', /*#__PURE__*/React__default["default"].createElement(Navbar__default["default"].Toggle, null), /*#__PURE__*/React__default["default"].createElement(Navbar__default["default"].Collapse, {
    className: "justify-content-between"
  }, /*#__PURE__*/React__default["default"].createElement(Nav__default["default"], null, left), /*#__PURE__*/React__default["default"].createElement(Nav__default["default"], null, center), /*#__PURE__*/React__default["default"].createElement(Nav__default["default"], null, right)))));
}

function ZFNavItems({
  lable,
  onClick,
  style
}) {
  return /*#__PURE__*/React__default["default"].createElement(Nav__default["default"].Link, {
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
  return /*#__PURE__*/React__default["default"].createElement(NavDropdown__default["default"], {
    title: title,
    menuVariant: "dark"
  }, lable.map((v, i) => {
    return /*#__PURE__*/React__default["default"].createElement(NavDropdown__default["default"].Item, {
      key: i,
      onClick: v.onClick
    }, v.lable);
  }));
}

exports.ZFDropDownItem = ZFDropDownItem;
exports.ZFNavItems = ZFNavItems;
exports.ZFNavigationBar = ZFNavigationBar;
