import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Item from '../../src/components/Item'
import { shallow } from 'enzyme';

let contact = {
  id: 'id',
  fullName: 'test guy',
  bio: 'bio',
  phone: 123456789,
  email: 'email',
}

describe('components', () => {
  describe('Item', () => {
    it('should render correctly', () => {
      let wrapper = shallow(<Item onSaveClick={() => {}} />);
      wrapper.setProps({selectedContact: contact});

      expect(wrapper.find('.name').get(0).props.value).toBe(contact.fullName);
    })

    it('should enable input when edit is clicked', () => {
      let wrapper = shallow(<Item onSaveClick={() => {}} />);
      wrapper.setProps({selectedContact: contact});

      expect(wrapper.find('.name').get(0).props.disabled).toBe(true);

      wrapper.find('.button--edit').simulate('click');

      expect(wrapper.state().disabled).toBe(false);
      expect(wrapper.find('.name').get(0).props.disabled).toBe(false);
    })
  })
})
