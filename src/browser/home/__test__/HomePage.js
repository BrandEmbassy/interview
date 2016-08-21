import React from 'react';
import test from 'ava';
import { mount } from 'enzyme';
import jsdom from 'jsdom';
import { HomePage } from '../HomePage.react';
import { Record, Map, Range } from 'immutable';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

const Contact = Record({
  name: '',
  id: null,
});

test('renders correct amount of children', t => {
  const contacts = new Map(Range(0, 5).map(index => [index, new Contact({
    name: 'John Doe',
    id: index,
  })]));
  const el = mount(<HomePage contacts={contacts} />);

  t.true(el.find('.item').length === contacts.size);
});
