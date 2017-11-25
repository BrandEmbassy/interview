import React, { Component } from 'react';

import './EditableTextArea.css';

class EditableTextArea extends Component {
  render() {
    return (
      this.props.editable ?
        (<textarea
          className="EditableTextArea"
          placeholder={this.props.placeholder}
          value={this.props.value}
          defaultValue={this.props.defaultValue}
          onChange={this.handleOnChange}
        />
        ) : (
          <div className="EditableTextArea">{this.props.defaultValue}</div>
        )
    );
  }

  handleOnChange = (event) => {
    event.preventDefault();
    this.props.onChange(event.target.value);
  }
}

export default EditableTextArea;
