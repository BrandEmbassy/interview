import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from './Input';

class TestAttrValueAndDefaultValue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
      value: 'Ciao!'
    };
  }

  changeValue = (event) => {
    this.setState((state, props) => ({
      value: `New Value ${state.counter}`,
      counter: state.counter + 1
    }));
  }

  render() {
    return (
      <div>
        <h3>Attr value</h3>
        <Input value={this.state.value} />
        <h3></h3>
        <h3>Attr defaultValue</h3>
        <Input defaultValue={this.state.value} />
        <p>
          <button
            onClick={this.changeValue}>
            Change value and defaultValue
            </button>
        </p>
      </div>
    );
  }
}

storiesOf('Input', module)
  .add('No attrs', () => (
    <Input />
  ))
  .add('Attr required', () => (
    <Input required />
  ))
  .add('Attr type to datetime-local', () => (
    <Input type="datetime-local" />
  ))
  .add('Attr autofocus', () => (
    <Input autofocus />
  ))
  .add('Attr placeholder', () => (
    <Input placeholder="Enter something!" />
  ))
  .add('Attr className', () => (
    <Input className="my-custom-class" />
  ))
  .add('Attr value and defaultValue', () => (
    <TestAttrValueAndDefaultValue />
  ))
  .add('API focus', () => {
    return (
      <div>
        <Input ref={(elem) => this.inputElem = elem} />
        <p>
          <button
            onClick={() => this.inputElem.focus()}>
            Focus me!
          </button>
        </p>
      </div>
    );
  })
