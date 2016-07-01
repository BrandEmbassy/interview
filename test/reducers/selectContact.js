import expect from 'expect'
import reducer from '../../src/reducers/selectedContact'

describe('selectedContact reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual('')
  })

  it('should handle SELECT_CONTACT', () => {
    expect(
      reducer([], {
        type: 'SELECT_CONTACT',
        id: 'id'
      })
    ).toEqual('id')
  })
})
