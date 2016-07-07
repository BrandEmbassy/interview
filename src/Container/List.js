import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../Component/List/Header'
import Item from '../Component/List/Item'
import Footer from '../Component/List/Footer'

import * as ListActions from '../Action/List'

class List extends React.Component {
  render() {
    const {contacts} = this.props

    return (
      <div className="list">
        <Header />
        <div className="list__content">
          {this.props.contacts.map((contact) => {
            return (
              <Item key={contact.id}
                    fullName={contact.fullName}
                    active={false}
                    onSelect={() => this.props.selectContact(contact.id)} />
            )
          })}
        </div>
        <Footer onAddContact={this.props.addContact}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state.form)
  return {
    contacts: state.contacts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ListActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
