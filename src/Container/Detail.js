import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Item from '../Component/Detail/Item'
import * as DetailActions from '../Action/Detail'

class Detail extends React.Component {
  renderItem(contact) {
    const { editContact, saveContact, deleteContact, isEditing } = this.props
    const id = contact.id

    return (
      <Item {...contact}
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
        {contact && this.renderItem(contact)}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail)
