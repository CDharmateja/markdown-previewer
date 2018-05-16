import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div className="editor">
        <textarea id="textboxid" value={this.props.text} onChange={this.props.handleInput} />
      </div>
    );
  }
}

export default Input;