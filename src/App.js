import React, { Component } from 'react';
import { ListItemTextBox } from './ListItemTextBox';
import { List } from './List';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="col-lg-8 offset-lg-2">
        <h1>List</h1>
        <ListItemTextBox />
        <List />
      </div>
    )
  }
}

export default App;
