import React, { Component } from 'react';

export default class Glass extends Component {
    render() {
        return (
            <p style={{backgroundColor: this.props.color}}>My Glass</p>
        )
    }
} 