import React, { Component } from 'react'

export default class ButtonName extends Component {
    render() {
        return (
            <button
                id={this.props.id}
                onClick={() => props.event}
            >{this.props.name}
            </button>
        )
    }
}
