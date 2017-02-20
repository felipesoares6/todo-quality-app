import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import Footer from './components/Footer';
import { addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo, filterTodos } from './lib/helpers';
import {pipe, partial} from './lib/utils';
import {loadTodos, createTodo} from './lib/todoService';

class App extends Component {
  state = {
    todos: [],
    currentTodo: ''
  }

  static contextTypes = {
    route: React.PropTypes.string
  }

  componentDidMount () {
    loadTodos()
      .then((todos) => this.setState({ todos }))
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

  showTempMessage = (msg) => {
    this.setState({ message: msg });
    setTimeout(() => this.setState({ message: '' }), 2000);
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

    createTodo(newTodo)
      .then(() => this.showTempMessage('Todo added'))
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    const displayTodos = filterTodos(this.state.todos, this.context.route);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="Todo-app">
          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span> }
          {this.state.message && <span className="success">{this.state.message}</span> }

          <Form handleInputChange={this.handleInputChange}
             currentTodo={this.state.currentTodo}
             handleSubmit={submitHandler} />

          <List handleToggle={this.handleToggle} handleRemove={this.handleRemove} todos={displayTodos} />
        </div>

        <Footer/>
      </div>
    );
  }
}

export default App;
