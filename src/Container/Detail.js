import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import Item from '../Component/Detail/Item'
import * as DetailActions from '../Action/Detail'
import Form from '../Form/Contact'

class Detail extends React.Component {
  renderItem() {
    // Contact
    const { editContact, saveContact, deleteContact, isEditing, contact, ...rest } = this.props
    const id = contact.id

    return (
      <Item {...rest}
            isEditing={isEditing}
            onEdit={(ev) => editContact(id)}
            onSave={(ev) => saveContact(id)}
            onDelete={(ev) => deleteContact(id)} />
    )
  }

  render() {
    const { contact } = this.props

    return (
      <div className="detail">
        {contact && this.renderItem()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const id = state.selectedId

  return {
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
