import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        title: ''
    }

    onChange = (e) => this.setState({ title: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input placeholder='Add To-Do here...'
                    style={todoStyle}
                    type="text"
                    value={this.state.title}
                    onChange={this.onChange} />
                <input className="btn" style={submitStyle} type="submit" value="Submit" />
            </form>
        )
    }
}

const todoStyle = {
    display: 'inline-block',
    width: '80%',
    padding: '5px 20px'
}

const submitStyle = {
    width: '20%'
}

export default AddTodo
