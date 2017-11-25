import React, { Component } from 'react';

import './AlphabetIndex.css';

class AlphabetIndex extends Component {
  render() {
    const renderLetter = (l) =>
      this.props.availableLetters.indexOf(l) > -1 ? <a href="">{l}</a> : l;

    return (
      <div
        className="AlphabetIndex"
        onClick={this.handleClick}
      >
        {Array.prototype.map.call('ABCDEFGHIJKLMNOPQRSTUVWXYZ', (l) => (
          <div key={l}>{renderLetter(l)}</div>
        ))}
      </div>
    );
  }

  handleClick = (event) => {
    event.preventDefault();

    const letter = event.target.innerText;
    if (this.props.availableLetters.indexOf(letter) !== -1) {
      this.props.onLetterClick(letter);
    }
  }
}

export default AlphabetIndex;
