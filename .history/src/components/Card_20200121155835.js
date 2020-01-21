import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            service: this.props.service
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            service: nextProps.service
        })
    }

    render() {

        return (
            <div id={`card-${this.state.service._id}`} className="card" onClick={this.props.event}>
                <img src={this.state.service.url} alt={this.state.service} />
                <p className="name">{this.state.service.nombre}</p>
            </div>
        )
    }
}

Card.propTypes = {
    service: PropTypes.object.isRequired
}

