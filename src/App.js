import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import { render } from '@testing-library/react';
import { Component } from 'react';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import { v4 as uuidv4 } from 'uuid';
import About from './components/pages/About';

class App extends Component {
  state = {
    todos: localData
  }


  handleCheckbox = (e) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === e) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  handleDelete = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => {
        return todo.id != id;
      })]
    })
    console.log(this.state.todos)
    localStorage.clear()
    localStorage.setItem('todos', JSON.stringify([...this.state.todos.filter(todo => {
      return todo.id != id;
    })]))
  }

  addTodo = (todo) => {
    const newTodo = {
      id: uuidv4(),
      title: todo,
      completed: false
    }
    localStorage.setItem('todos', JSON.stringify([...this.state.todos, newTodo]))
    this.setState({ todos: [...this.state.todos, newTodo] })
    // this.handleLocal()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Todos todos={this.state.todos} handleCheckbox={this.handleCheckbox} handleDelete={this.handleDelete} />
                <AddTodo addTodo={this.addTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }

}

const todoList = [
  {
    id: uuidv4(),
    title: "Take out the trash",
    completed: false
  },
  {
    id: uuidv4(),
    title: "Dinner",
    completed: false
  },
  {
    id: uuidv4(),
    title: "Rake the leaves",
    completed: false
  }
]

const localData = localStorage.getItem('todos') === null ? todoList : JSON.parse(localStorage.getItem('todos'))


export default App;
