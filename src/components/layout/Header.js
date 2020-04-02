import React, { Component } from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>To-Do List</h1>
            <Link style={headerStyle} to="/">Home</Link> |
            <Link style={headerStyle} to="/about" >About</Link >
        </header >
    )
}

const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header
