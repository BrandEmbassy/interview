import expect from 'expect'
import reducer from '../../src/reducers/contacts'
import * as actions from '../../src/actions'

describe('contacts reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([])
  })

  it('should handle SAVE_CONTACT', () => {
    expect(
      reducer([{
        id: 'id',
        fullName: 'test guy',
      }], actions.saveContact({
          id: 'id',
          fullName: 'test gal',
          phone: 0,
      }))
    ).toEqual([{
      id: 'id',
      fullName: 'test gal',
      phone: 0,
    }])
  })

  it('should handle NEW_CONTACT', () => {
    expect(
      reducer([{
        id: 'id',
        fullName: 'test guy',
      }], actions.newContact()).length
    ).toEqual(2)
  })
})
