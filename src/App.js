import React, { Component } from 'react';
import { ListItemTextBox } from './ListItemTextBox';
import { List } from './List';
import { Login } from './Login';
import { Logout } from './Logout';
import { ShowUserButton } from './ShowUserButton';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="col-lg-8 offset-lg-2 mt-3">
        <Login />
        <Logout />
        <ShowUserButton />
        <br />
        <ListItemTextBox />
        <List />
      </div>
    )
  }
}

export default App;
