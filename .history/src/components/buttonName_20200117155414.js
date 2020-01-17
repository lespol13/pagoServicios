import React, { Component } from 'react'

export default class ButtonName extends Component {
    render() {
        return (
            <button
                id={this.props.id}
                onClick={() => this.props.event}
                className="prueba"
            >{this.props.name}
            </button>
        )
    }
}
