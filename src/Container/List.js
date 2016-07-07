import React from 'react'
import Header from '../Component/List/Header'
import Item from '../Component/List/Item'
import Footer from '../Component/List/Footer'

class List extends React.Component {
  render() {
    return (
      <div className="list">
        <Header />
        <div className="list__content">
          {this.props.contacts.map((contact) => {
            return <Item fullName={contact.fullName} active={false} />
          })}
        </div>
        <Footer />
      </div>
    )
  }
}

export default List
