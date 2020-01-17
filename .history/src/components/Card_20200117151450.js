import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ButtonName from './buttonName'

export default class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            service: this.props.service
        }
    }

    holaMundo = () => {
        console.log("Hola Mundo")
    }

    render() {
        return (
            <div id={`card-${this.state.service._id}`} className="card">
                <img src={this.state.service.url} alt={this.state.service} />
            </div>
        )
    }
}

Card.propTypes = {
    service: PropTypes.object.isRequired
}

