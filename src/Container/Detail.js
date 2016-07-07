import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, getValues } from 'redux-form'

import Item from '../Component/Detail/Item'
import * as DetailActions from '../Action/Detail'
import Form from '../Form/Contact'

class Detail extends React.Component {
  renderItem() {
    const { editContact, saveContact, deleteContact, contact, form, ...rest } = this.props

    if(contact) {
      const id = contact.id

      return (
        <Item key={id}
              {...rest}
              onEdit={(ev) => editContact(id)}
              onSave={(ev) => saveContact(id, getValues(form))}
              onDelete={(ev) => deleteContact(id)} />
      )
    }
  }

  render() {
    return (
      <div className="detail">
        {this.renderItem()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const id = state.selectedId

  return {
    form: state.form.contact,
    contact: id && state.contacts.find((contact) => contact.id === id),
    isEditing: state.isEditing
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(DetailActions, dispatch)
}

export default (
  reduxForm(...Form)(
    connect(mapStateToProps,mapDispatchToProps)(
      Detail
    )
  )
)
