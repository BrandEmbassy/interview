import React, { Component } from 'react';

import Input from '../Input/Input';

class EditableTextBox extends Component {
  render() {
    return (
      this.props.editable ?
        (
          <Input
            className="EditableTextBox"
            required={this.props.required}
            placeholder={this.props.placeholder}
            autoFocus={this.props.autoFocus}
            value={this.props.value}
            defaultValue={this.props.defaultValue}
            onChange={this.handleOnChange}
          />
        ) : (
          <span className="EditableTextBox">{this.props.defaultValue}</span>
        )
    );
  }

  handleOnChange = (event) => {
    this.props.onChange(event.target.value);
  }
}

export default EditableTextBox;
