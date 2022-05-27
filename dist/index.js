'use strict';

require('react');
var PropTypes = require('prop-types');
require('react-bootstrap/Container');
require('react-bootstrap/Navbar');
require('react-bootstrap/Nav');
require('bootstrap/dist/css/bootstrap.min.css');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

({
  dark: PropTypes__default["default"].bool,
  brand: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].string]),
  brandLink: PropTypes__default["default"].string,
  brandOnClick: PropTypes__default["default"].func,
  left: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].string]),
  center: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].string]),
  right: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].string]),
  brandStyling: PropTypes__default["default"].object
});
