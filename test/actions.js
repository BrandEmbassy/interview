import expect from 'expect'
import * as actions from '../src/actions'

describe('actions', () => {
  it('should create an action to select a contact', () => {
    const id = 'contact_id'
    const expectedAction = {
      type: 'SELECT_CONTACT',
      id
    }
    expect(actions.selectContact(id)).toEqual(expectedAction)
  })
})
