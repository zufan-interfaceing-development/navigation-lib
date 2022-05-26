'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var Container = require('react-bootstrap/Container');
var Navbar = require('react-bootstrap/Navbar');
var Nav = require('react-bootstrap/Nav');
require('bootstrap/dist/css/bootstrap.min.css');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var Container__default = /*#__PURE__*/_interopDefaultLegacy(Container);
var Navbar__default = /*#__PURE__*/_interopDefaultLegacy(Navbar);
var Nav__default = /*#__PURE__*/_interopDefaultLegacy(Nav);

const ZFNavigationBar = ({
  dark = false,
  brandName,
  left,
  center,
  right
}) => {
  dark = dark ? 'dark' : 'light';
  const textColor = dark == 'dark' ? '#f7f7f7' : '#292b2c';
  return /*#__PURE__*/React__default["default"].createElement(Navbar__default["default"], {
    bg: dark,
    variant: dark,
    expand: "lg"
  }, /*#__PURE__*/React__default["default"].createElement(Container__default["default"], {
    fluid: true,
    style: {
      color: textColor
    }
  }, brandName ? /*#__PURE__*/React__default["default"].createElement(Navbar__default["default"].Brand, {
    href: "#"
  }, brandName) : '', /*#__PURE__*/React__default["default"].createElement(Navbar__default["default"].Toggle, null), /*#__PURE__*/React__default["default"].createElement(Navbar__default["default"].Collapse, {
    className: "justify-content-between"
  }, /*#__PURE__*/React__default["default"].createElement(Nav__default["default"], null, left), /*#__PURE__*/React__default["default"].createElement(Nav__default["default"], null, center), /*#__PURE__*/React__default["default"].createElement(Nav__default["default"], null, right))));
};
ZFNavigationBar.PropTypes = {
  dark: PropTypes__default["default"].bool,
  brandName: PropTypes__default["default"].string,
  left: PropTypes__default["default"].object,
  center: PropTypes__default["default"].object,
  right: PropTypes__default["default"].object
};

exports.ZFNavigationBar = ZFNavigationBar;
