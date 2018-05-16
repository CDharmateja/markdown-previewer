import React, { Component } from 'react';
import './App.css';
import Input from './components/input.js';
import Preview from './components/preview.js';

const startingText = `Heading
=======

Sub-heading
-----------
 
### Another deeper heading
 
Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a  
line break

Text attributes *italic*, **bold**, 
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[C Dharmateja](https://freecodecamp.com/cdharmateja)*`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: startingText
    }

    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(e) {
    const value = e.target.value;

    console.log('handleInput', e.target.value);

    this.setState({
      inputText: value
    });
  }

  text() {
    return this.state.inputText;
  }

  render() {
    return (
      <div className="App">
        <h1 id="title">Markdown Previewer</h1>
        <div className="container">
          <Input handleInput={this.handleInput} text={this.state.inputText}/>
          <Preview text={this.state.inputText}/>
        </div>
      </div>
    );
  }
}

export default App;
