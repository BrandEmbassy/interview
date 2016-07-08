import { assert } from 'chai'
import Reducer from '../../src/Reducer/is_editing'
import * as DetailActions from '../../src/Action/Detail'

describe('IsEditing reducer', () => {
  it('should edit current contact', () => {
    const state = Reducer(false, DetailActions.editContact(1))

    assert.equal(state, true)
  })
})
