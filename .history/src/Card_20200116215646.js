import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            service: this.props.service
        }
    }
    render() {
        return (
            <div id={`card-${this.state.service._id}`} className="card">
                <img src={this.state.service.url} alt={this.state.service} />
                <div className="name">
                    <p>{this.state.service.nombre}</p>
                </div>

            </div>
        )
    }
}

Card.propTypes = {
    service: PropTypes.object.isRequired
}

