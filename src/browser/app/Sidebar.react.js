import React, { PropTypes } from 'react';
import Component from 'react-pure-render/component';
import { connect } from 'react-redux';
import * as actions from '../../common/contacts/actions';

const Contact = ({ active, name }) => (
  <div className={`item ${active && 'item--active'}`}>
    <div className="in">
      <div className="profile-pic"><img src={`https://api.adorable.io/avatars/100/${name}.png`} alt="Avatar" /></div>
      {name}
    </div>
  </div>);

Contact.propTypes = {
  active: PropTypes.bool,
  name: PropTypes.string,
};

export class Sidebar extends Component {
  static propTypes = {
    contacts: PropTypes.object.isRequired,
    newContact: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      filterBy: '',
    };
  }

  render() {
    const { newContact, contacts } = this.props;
    const { filterBy } = this.state;

    return (
      <div className="list">
        <div className="list__header">
          <div className="search">
            <input className="input" type="text" name="" value={filterBy} onChange={e => this.setState({ filterBy: e.target.value.toLowerCase() })} placeholder="Search ..." />
          </div>
          <div className="heading">Contact List</div>
        </div>
        <div className="list__content">
          { contacts && contacts
            .filter(contact => contact.get('name').toLowerCase().includes(filterBy))
            .sortBy(contact => contact.id).reverse()
            .map(contact => <Contact name={contact.get('name')} />)
          }
        </div>
        <div className="list__footer">
          <div className="add-bttn" onClick={newContact}><span className="in">Add new contact</span></div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  contacts: state.contacts,
}), actions)(Sidebar);
