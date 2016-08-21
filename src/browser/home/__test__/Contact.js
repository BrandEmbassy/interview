import React from 'react';
import test from 'ava';
import { mount } from 'enzyme';
import jsdom from 'jsdom';
import Contact from '../Contact.react';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

test('renders name correctly', t => {
  const name = 'John Doe';
  const el = mount(<Contact name={name} />);

  t.true(el.contains(
    <p className="name">{name}</p>
  ));
});

test('renders editing state correctly', t => {
  const el = mount(<Contact editing />);

  t.true(el.find('input').length === 3);
  t.true(el.find('textarea').length === 1);
});

test('renders disabled button correctly', t => {
  const el = mount(<Contact editing />);

  t.true(el.find('.button.button--positive').is('[disabled]'));
});

test('renders email error correctly', t => {
  const email = 'hi&brandembassy.com';
  const el = mount(<Contact editing email={email} />);

  t.true(el.contains(
    <span className="error-msg">Email is not a valid email</span>
  ));
  t.true(el.find('.email.error').length === 1);
});
