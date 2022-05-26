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
  dark,
  brand,
  brandLink,
  navBarBackgroundColor,
  brandOnClick,
  left,
  center,
  right,
  textColor = dark == 'dark' ? '#f7f7f7' : '#292b2c'
}) => {
  const [darkMode, setDarkMode] = React.useState();
  const [textsColor, setTextsColor] = React.useState();
  const [navBgColor, setNavBgColor] = React.useState();
  React.useEffect(() => {
    if (navBarBackgroundColor || navBarBackgroundColor > 0) {
      setNavBgColor(navBarBackgroundColor);
      setDarkMode();
    } else {
      dark = dark ? 'dark' : 'light';
      setNavBgColor();
      setDarkMode(dark);
    }

    if (textColor == '') textColor = dark == 'dark' ? '#f7f7f7' : '#292b2c';
    setTextsColor(textColor);
  }, [dark, navBarBackgroundColor, textColor]);
  const style = {
    navContainer: {
      backgroundColor: navBgColor
    },
    txtColor: {
      color: textsColor
    }
  };
  return /*#__PURE__*/React__default["default"].createElement(Navbar__default["default"], {
    bg: darkMode,
    variant: darkMode,
    expand: "lg",
    style: style.navContainer
  }, /*#__PURE__*/React__default["default"].createElement(Container__default["default"], {
    style: style.txtColor ? style.txtColor : ''
  }, /*#__PURE__*/React__default["default"].createElement(Navbar__default["default"].Brand, {
    href: brandLink,
    onClick: brandOnClick
  }, brand), /*#__PURE__*/React__default["default"].createElement(Navbar__default["default"].Toggle, null), /*#__PURE__*/React__default["default"].createElement(Navbar__default["default"].Collapse, {
    className: "justify-content-between"
  }, /*#__PURE__*/React__default["default"].createElement(Nav__default["default"], null, left), /*#__PURE__*/React__default["default"].createElement(Nav__default["default"], null, center), /*#__PURE__*/React__default["default"].createElement(Nav__default["default"], null, right))));
};
ZFNavigationBar.PropTypes = {
  dark: PropTypes__default["default"].bool,
  brand: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].string]),
  brandLink: PropTypes__default["default"].string,
  brandOnClick: PropTypes__default["default"].func,
  navBarBackgroundColor: PropTypes__default["default"].string,
  left: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].string]),
  center: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].string]),
  right: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].string]),
  textColor: PropTypes__default["default"].string
};

exports.ZFNavigationBar = ZFNavigationBar;
