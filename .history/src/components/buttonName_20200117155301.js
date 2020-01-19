import React, { Component } from 'react'
import '../App.scss'

export default class ButtonName extends Component {
    render() {
        return (
            <button
                id={this.props.id}
                onClick={() => this.props.event}
            >{this.props.name}
            </button>
        )
    }
}