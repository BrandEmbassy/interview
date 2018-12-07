import React from "react";
import { connect } from "react-redux";
import { onAddNewContactClicked, onContactClick } from "./actions/contactList";
import "./App.css";
import ListContacts from "./components/ListContacts";
import ListFooter from "./components/ListFooter";
import FilterManager from "./components/FilterManager";
import DetailModal from "./components/DetailModal";
import SearchInput from "./components/SearchInput";

const App = ({ contacts, onAddNewContactClicked, onContactClick }) => {
  return (
    <div>
      <DetailModal />
      <div className="list">
        <div className="list__header">
          <SearchInput />
          <FilterManager />
          <div className="heading">Contact List</div>
        </div>
        <ListContacts contacts={contacts} onContactClick={onContactClick} />
        <ListFooter onAddNewContactClicked={onAddNewContactClicked} />
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  contacts: state.contacts
});

const mapDispatchToProps = {
  onAddNewContactClicked,
  onContactClick
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
