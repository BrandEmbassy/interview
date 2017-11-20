import React, { Component } from 'react';

import './Toast.css';

const DEFAULT_TIMEOUT = 3000;

class Toast extends Component {
  constructor(props) {
    super(props);

    this.disposed = true;

    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <div
        ref={(elem) => this.elem = elem}
        className="Toast"
      >
        {this.state.text}
      </div>
    );
  }

  show(message) {
    let text = message;
    this.timeout = DEFAULT_TIMEOUT;

    if (typeof message === 'object') {
      text = message.text;
      this.timeout = message.timeout;
    }

    if (text) {
      this.setState({ text });

      this.elem.classList.remove('Toast_show');
      this.elem.classList.add('Toast_show');

      if (this.timeout > 0) {
        if (this.disposeMessageTimeout) {
          clearTimeout(this.disposeMessageTimeout);
        }

        this.disposeMessageTimeout = setTimeout(() => {
          if (this.timeout > 0) {
            this.elem.classList.remove('Toast_show');
          }
        }, this.timeout);
      }
    }
  }
}

export default Toast;
