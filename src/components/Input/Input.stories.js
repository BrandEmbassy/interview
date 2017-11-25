import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from './Input';

storiesOf('Input', module)
  .add('with default', () => (
    <Input />
  ))
  .add('with number type', () => (
    <Input type="number" />
  ))
  .add('with datetime type', () => (
    <Input type="datetime-local" />
  ))
  .add('with email type', () => (
    <Input type="email" />
  ))
  .add('with autofocus', () => (
    <Input autofocus />
  ))
  .add('with placeholder', () => (
    <Input placeholder="Enter something!" />
  ))
  .add('with custom className', () => (
    <Input className="my-custom-class" />
  ))
  .add('with value', () => (
    <Input value="Ciao gente!" />
  ))
  .add('with default value', () => (
    <Input defaultValue="I'm the default value" />
  ))
  .add('function focus()', () => {
    return (
      <div>
        <Input ref={(elem) => this.inputElem = elem} />
        <p>
          <button
            onClick={() => this.inputElem.focus()}>
            call focus()
          </button>
        </p>
      </div>
    );
  })
