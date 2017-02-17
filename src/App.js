import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo } from './lib/helpers';
import {pipe, partial} from './lib/utils';

class App extends Component {
  state = {
    todos: [
      {id: 1, name: 'top-list-1', isComplete: false},
      {id: 2, name: 'top-list-2', isComplete: false},
      {id: 3, name: 'top-list-3', isComplete: false},
      {id: 4, name: 'top-list-4', isComplete: false}
    ],
    currentTodo: ''
  }

  handleRemove = (id, evt) => {
    evt.preventDefault()

    const updateTodos = removeTodo(this.state.todos, id)
    this.setState({ todos: updateTodos })
  }

  handleToggle = (id) => {
    const getUpdatedTodos = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos))
    const updatedTodos = getUpdatedTodos(id, this.state.todos)

    this.setState({
      todos: updatedTodos
    })
  }

  handleInputChange = (evt) => {
    this.setState({
      currentTodo: evt.target.value
    })
  }

  handleEmptySubmit = (evt) => {
    evt.preventDefault();

    this.setState({
      errorMessage: 'Please supply a todo name'
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    const newId = generateId()
    const newTodo = { id: newId, name: this.state.currentTodo, isComplete: false }
    const updatedTodos = addTodo(this.state.todos, newTodo);

    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    })
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="Todo-app">
          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span> }

          <Form handleInputChange={this.handleInputChange}
             currentTodo={this.state.currentTodo}
             handleSubmit={submitHandler} />
          <List handleToggle={this.handleToggle} handleRemove={this.handleRemove} todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
