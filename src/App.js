import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import List from './components/List';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {id: 1, name: 'top-list-1', isComplete: false},
        {id: 2, name: 'top-list-2', isComplete: false},
        {id: 3, name: 'top-list-3', isComplete: false},
        {id: 4, name: 'top-list-4', isComplete: false}
      ]
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(evt) {
    this.setState({
      currentTodo: evt.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="Todo-app">
          <Form handleInputChange={this.handleInputChange} currentTodo={this.state.currentTodo} />
          <List todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
