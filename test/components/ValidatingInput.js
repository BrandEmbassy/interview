import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import ValidatingInput from '../../src/components/ValidatingInput'
import { shallow } from 'enzyme';
import util from '../../src/util';


function setup() {
  let validityChanged = expect.createSpy()
  let wrapper = shallow(<ValidatingInput
                          className="tel"
                          label="Phone"
                          onChange={(e) => { }}
                          validityChanged={validityChanged}
                          value="123456789"
                          validator={util.isPhone}
                          disabled={false}
                        />);

  return {
    wrapper,
    validityChanged,
  }
}

describe('components', () => {
  describe('ValidatingInput', () => {
    it('should render correctly', () => {
      const { wrapper, validityChanged } = setup();

      expect(wrapper.find('input').get(0).props.value).toBe('123456789');
    })

    it('should render error span when validation failed', () => {
      const { wrapper, validityChanged } = setup();
      wrapper.setProps({value: 'Hello'});

      expect(wrapper.find('.error-msg').length).toBe(1, 'error label missing');
      expect(validityChanged).toHaveBeenCalled()
    })
  })
})
