import 'react';
import PropTypes from 'prop-types';
import 'react-bootstrap/Container';
import 'react-bootstrap/Navbar';
import 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

({
  dark: PropTypes.bool,
  brand: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  brandLink: PropTypes.string,
  brandOnClick: PropTypes.func,
  left: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  center: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  right: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  brandStyling: PropTypes.object
});
