import React, { Component } from 'react';

import './Input.css';

class Input extends Component {
  render() {
    return (
      <input
        ref={(elem) => this.inputElem = elem}
        type={this.props.type || 'text'}
        className={"Input " + this.props.className}
        placeholder={this.props.placeholder}
        autoFocus={this.props.autoFocus}
        value={this.props.value}
        defaultValue={this.props.defaultValue}
        onChange={this.handleOnChange}
        onBlur={this.onBlur}
      />
    );
  }

  focus() {
    this.inputElem.focus();
  }

  onBlur = (event) => {
    event.preventDefault();
    this.checkRequired(event.target);
  }

  handleOnChange = (event) => {
    this.checkRequired(event.target);
    this.props.onChange(event);
  }

  checkRequired(input) {
    if (!this.props.required) return;

    if (input.value) {
      input.classList.remove('Input_required');
    } else {
      input.classList.add('Input_required');
    }
  }
}

export default Input;
