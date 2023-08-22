import React, { Component } from 'react';

class InputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      displayText: 'Hello'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleButtonClick() {
    this.setState({ displayText: this.state.inputValue });
  }

  render() {
    return (
      <div>
        <h1>{this.state.displayText}</h1>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          placeholder='write'
        />
        <button onClick={this.handleButtonClick}>Change Text</button>
      </div>
    );
  }
}

export default InputComponent;
