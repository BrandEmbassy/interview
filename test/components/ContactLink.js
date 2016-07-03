import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import ContactLink from '../../src/components/ContactLink'

function setup(selected) {
  let props = {
    onClick: expect.createSpy(),
    fullName: 'test guy',
    selected: selected,
  }

  let renderer = TestUtils.createRenderer()
  renderer.render(<ContactLink {...props} />)
  let output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer
  }
}

describe('components', () => {
  describe('ContactLink', () => {
    it('should render correctly', () => {
      const { output, props } = setup(false)

      expect(output.type).toBe('div')
      expect(output.props.className).toBe('item')

      let text = output.props.children.props.children[1]
      expect(text).toBe(props.fullName)
    })

    it('should render correctly when contact is selected', () => {
      const { output, props } = setup(true)

      expect(output.type).toBe('div')
      expect(output.props.className).toBe('item item--active')

      let text = output.props.children.props.children[1]
      expect(text).toBe(props.fullName)
    })
  })
})
