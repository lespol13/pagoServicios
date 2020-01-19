import React, { Component } from 'react'

export default class ButtonName extends Component {
    render() {
        return (
            <button
                className="buttonName"
                id={this.props.id}
                onClick={this.props.event}
            >{this.props.name}
            </button>
        )
    }
}