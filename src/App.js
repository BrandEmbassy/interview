import React, { Component } from "react";
import "./App.css";
import ListContacts from "./components/ListContacts";
import ListFooter from "./components/ListFooter";
import FilterManager from "./components/FilterManager";
import Detail from "./components/Detail";

const data = [
  {
    id: 1,
    name: "Janko Mrkva",
    phone: "+420 777 888 999",
    email: "brand@embassy.com",
    bio: "This is a short biography of Janko Mrkva"
  },
  {
    id: 2,
    name: "Patrik Vrbovsky",
    phone: "+420 777 888 999",
    email: "brand@embassy.com",
    bio: "This is a short biography of Patrik Vrbovsky"
  },
  {
    id: 3,
    name: "Tomáš Jedno",
    phone: "+420 777 888 999",
    email: "brand@embassy.com",
    bio: "This is a short biography of Tomáš Jedno"
  }
];

const SearchInput = () => {
  let input;

  return (
    <div className="search">
      x
      <input
        ref={node => {
          input = node;
        }}
        className="input"
        type="text"
        name=""
        // value=""
        onChange={() => {
          // TODO: there should be a dispatch that triggers filter
          console.log("input", input);
        }}
        placeholder="Search ..."
      />
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <div className="list">
          <div className="list__header">
            <SearchInput />
            <FilterManager />
            <div className="heading">Contact List</div>
          </div>
          <ListContacts contacts={data} />
          <ListFooter />
        </div>
        <Detail editable={false} contact={data[1]} />
      </div>
    );
  }
}

export default App;
