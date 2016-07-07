import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Item from '../Component/Detail/Item'
import * as DetailActions from '../Action/Detail'

class Detail extends React.Component {
  render() {
    return (
      <div className="detail">
        {this.propscontact && <Item {...this.props} />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const id = state.selectedContactId
  const contact = id && state.contactList.find((contact) => contact.id === id)

  return {
    contact: contact
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(DetailActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail)
