import React from 'react';
import Component from 'react-pure-render/component';
import { connect } from 'react-redux';
import * as actions from '../../common/contacts/actions';

const Contact = props => (
  <div className={`item ${props.active && 'item--active'}`}>
    <div className="in">
      <div className="profile-pic"><img src={`https://api.adorable.io/avatars/100/${props.name}.png`} alt="Avatar"/></div>
      {props.name}
    </div>
  </div>);

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterBy: '',
    }
  }
  render() {
    const { newContact, contacts } = this.props;
    const { filterBy } = this.state;

    return (
      <div className="list">
        <div className="list__header">
           <div className="search">
              <input className="input" type="text" name="" value={filterBy} onChange={e => this.setState({ filterBy: e.target.value })} placeholder="Search ..." />
            </div>
            <div className="heading">Contact List</div>
        </div>
        <div className="list__content">
          { contacts.map && contacts.filter(contact => contact.name.toLowerCase().includes(filterBy.toLowerCase())).map(contact => <Contact name={contact.name} />) }
        </div>
      <div className="list__footer">
        <div className="add-bttn" onClick={newContact}><span className="in">Add new contact</span></div>
      </div>
    </div>
    );
  }
}

export default connect(state => ({
  contacts: state.contacts
}), actions)(Sidebar);
