import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: 'grey 1px dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p><input type="checkbox" onChange={this.props.handleCheckbox.bind(this, id)} /> {' '}
                    {title}
                    {'  '}<button style={btnStyle} onClick={this.props.handleDelete.bind(this, id)}>X</button></p>
            </div>
        )
    }
}

const btnStyle = {
    background: 'red',
    padding: '3px 10px',
    color: 'white',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}


TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
