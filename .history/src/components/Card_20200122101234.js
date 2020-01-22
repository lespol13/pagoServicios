import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Card extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         service: this.props.service
    //     }
    // }

    componentWillReceiveProps(nextProps) {
        this.setState({
            service: nextProps.service
        })
    }

    render() {

        return (
            <div id={`card-${this.props.service._id}`} className="card" onClick={this.props.event}>
                <img src={this.props.service.url} alt={this.props.service} />
                <p className="name">{this.props.service.nombre}</p>
            </div>
        )
    }
}

Card.propTypes = {
    service: PropTypes.object.isRequired
}

