import { assert } from 'chai'
import Form from '../../src/Form/Contact'

const validate = Form[0].validate

describe('Contact form', () => {
  it('should returns error for wrong form', () => {
    const errors = validate({})

    assert.deepEqual(errors, {
      fullName: 'Required',
      tel: 'Wrong format',
      email: 'Wrong format'
    })
  })

  it('should returns no error for valid form', () => {
    const errors = validate({
      fullName: "David",
      tel: "666888999",
      email: "david@hello.com"
    })

    assert.deepEqual(errors, {})
  })
})
