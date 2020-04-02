import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    handleCheckbox = (e) => {
        console.log('Hello');
    }
    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} handleCheckbox={this.props.handleCheckbox} handleDelete={this.props.handleDelete} />
        ));
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
