import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../Component/List/Header'
import Item from '../Component/List/Item'
import Footer from '../Component/List/Footer'

import * as ListActions from '../Action/List'

class List extends React.Component {
  render() {
    const {contactList} = this.props

    return (
      <div className="list">
        <Header />
        <div className="list__content">
          {this.props.contactList.map((contact) => {
            return <Item key={contact.id} fullName={contact.fullName} active={false} />
          })}
        </div>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    contactList: state.contactList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ListActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
