import { assert } from 'chai'
import Reducer from '../../src/Reducer/selected_id'
import * as DetailActions from '../../src/Action/Detail'

describe('SelectedId reducer', () => {
  it('should select contact', () => {
    const editedContactId = 1
    const state = Reducer(null, DetailActions.editContact(editedContactId))

    assert.equal(state, editedContactId)
  })
})
