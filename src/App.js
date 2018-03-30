import React, { Component } from 'react';
import './App.css';
import { KTopbar } from './keact'

class App extends Component {
  constructor (props) {
    super(props)
    this.handle = this.handle.bind(this)
  }
  handle (e) {
    console.log('clicked:', e)
  }
  render() {
    return (
      <div className="App">
        <h1>React Storybook</h1>
        <hr />
        <KTopbar title="kkkkkk"></KTopbar>
      </div>
    );
  }
}

export default App;
