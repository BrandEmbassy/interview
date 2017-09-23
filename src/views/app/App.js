import React from 'react';
import PropTypes from 'prop-types';
import './styles/App.css';

export default function App(props) {
  return (<div>
    {props.children}
  </div>);
}

App.propTypes = {
  children: PropTypes.any,
};

