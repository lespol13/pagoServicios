import React, { Component } from 'react'

export default class ButtonName extends Component {

    holaMundo=()=>{
        console.log("Hola Mundo")
    }
    render() {
        return (
            <button
                id={this.props.id}
                onClick={() => this.holaMundo()}
                className="buttonName"
            >{this.props.name}
            </button>
        )
    }
}
