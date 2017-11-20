import React, { Component } from 'react';

import Input from '../Input/Input';

import addIcon from './add.svg';
import removeIcon from './remove.svg';
import './EditableList.css';

class EditableList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: props.items || [],
      header: '',
      data: ''
    };

    this.setStateInputHeader = this.setStateInputValue('header').bind(this);
    this.setStateInputData = this.setStateInputValue('data').bind(this);
  }

  render() {
    const { header, data } = this.props.itemFields;

    const wrapInFormIfEditable = (table) =>
      this.props.editable ?
        <form onSubmit={this.handleAddItem}>{table}</form> :
        table;

    const {
      header: headerPlaceholder,
      data: dataPlaceholder
    } = this.props.placeholders || {};

    return (
      wrapInFormIfEditable(
        <table className="EditableList">
          <tbody>

            {this.props.editable && (
              <tr className="EditableList__editorRow">
                <td>
                  <Input
                    ref={(elem) => this.headerInput = elem}
                    required
                    value={this.state.header}
                    onChange={this.setStateInputHeader}
                    placeholder={headerPlaceholder}
                  />
                </td>
                <td>
                  <Input
                    required
                    value={this.state.data}
                    onChange={this.setStateInputData}
                    placeholder={dataPlaceholder}
                  />
                </td>
                <td className="EditableList_actionsCol">
                  <button
                    className="Contact__button Contact__button_icon"
                    disabled={!this.state.header || !this.state.data}
                    type="submit">
                    <img alt="Add item" src={addIcon} />
                  </button>
                </td>
              </tr>
            )}

            {this.state.items.map((i, index) =>
              <tr
                className="EditableList__itemRow"
                key={i[header] + i[data]}
              >
                <th>{i[header]}</th><td>{i[data]}</td>

                {this.props.editable && (
                  <td className="EditableList_actionsCol">
                    <button
                      className="Contact__button Contact__button_danger Contact__button_icon"
                      onClick={this.onDeleteItemClick(index)}>
                      <img alt="Delete item" src={removeIcon} />
                    </button>
                  </td>
                )}
              </tr>
            )}

          </tbody>
        </table>
      ));
  }

  setStateInputValue = (field) => (event) => {
    this.setState({ [field]: event.target.value });
  }

  handleAddItem = (event) => {
    event.preventDefault();

    if (!this.state.header || !this.state.data) {
      return;
    }

    const { header, data } = this.props.itemFields;

    this.setState((prevState, props) => {
      const items = prevState.items.slice();

      items.push({
        [header]: prevState.header,
        [data]: prevState.data,
      });

      this.headerInput.focus();

      props.onChange(items);

      return {
        items,
        header: '',
        data: ''
      };
    });
  }

  onDeleteItemClick = (index) => (event) => {
    event.preventDefault();

    this.setState((prevState, props) => {
      const items = prevState.items.slice();

      items.splice(index, 1);

      props.onChange(items);

      return { items };
    });
  }
}

export default EditableList;
