import React from 'react';
import test from 'ava';
import { mount } from 'enzyme';
import jsdom from 'jsdom';
import { Sidebar } from '../Sidebar.react';
import { Record, Map, Range } from 'immutable';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

const Contact = Record({
  name: '',
  id: null,
})

test('renders correct amount of children', t => {
  const contacts = new Map(Range(0, 5).map(index => [index, new Contact({
    name: 'John Doe',
    id: index
  })]));
  const el = mount(<Sidebar contacts={contacts} />);

  t.true(el.find('.item').length === contacts.size);
});

test('filtering works', t => {
  const contacts = new Map(Range(0, 5).map(index => [index, new Contact({
    name: 'John Doe',
    id: index
  })])).set(5, new Contact({
    name: 'Will Smith',
    id: 6
  }));
  const el = mount(<Sidebar contacts={contacts} />);
  el.setState({
    filterBy: 'will'
  });

  t.true(el.find('.item').length === 1);
});
