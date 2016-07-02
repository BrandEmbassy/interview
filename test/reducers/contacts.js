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
      }))
    ).toEqual([{
      id: 'id',
      fullName: 'test gal',
    }])
  })
})
