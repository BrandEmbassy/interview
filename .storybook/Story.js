import React from 'react';

export const Story = (props) => (
  <div>

    <h3
      style={{
        background: 'white',
        color: '#777',
        padding: '8px',
        margin: '0 0 32px 0',
        textAlign: 'center',
      }}
    >{props.desc}</h3>

    <div
      style={{
        width: '768px',
        margin: 'auto',
      }}
    >
      {props.children}
    </div>

  </div>
);
