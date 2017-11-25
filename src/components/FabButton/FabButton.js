import React from 'react';

import './FabButton.css';

const FabButton = (props) => (
  <button
    disabled={props.disabled}
    className="FabButton"
    onClick={props.onClick}
  >{props.children}</button>
);

export default FabButton;
