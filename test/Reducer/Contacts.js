import { assert } from 'chai'
import Reducer from '../../src/Reducer/contacts'
import * as ListActions from '../../src/Action/List'
import * as DetailActions from '../../src/Action/Detail'

describe('Contacts reducer', () => {
  it('should add new contact', () => {
    const state = Reducer([], ListActions.addContact())

    assert.deepEqual(state, [
      {
        id: state[0].id
      }
    ])
  })

  it('should save contact', () => {
    const contact = {
      id: 1,
      fullName: 'David'
    }

    const form = {
      fullName: 'David Schovanec'
    }

    const state = Reducer([contact], DetailActions.saveContact(contact.id, form))

    assert.deepEqual(state, [
      {
        id: 1,
        fullName: 'David Schovanec'
      }
    ])
  })

  it('should delete contact', () => {
    const contact = {
      id: 1
    }

    const state = Reducer([contact], DetailActions.deleteContact(contact.id))

    assert.deepEqual(state, [])
  })
})
