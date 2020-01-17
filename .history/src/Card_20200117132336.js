import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            service: this.props.service
        }
    }

    holaMundo = (a) => {
        console.log(a)
    }

    render() {
        return (
            <div id={`card-${this.state.service._id}`} className="card" onClick={() => this.holaMundo("Hola mundo")}>
                <img src={this.state.service.url} alt={this.state.service} />
                <button className="buttonName">
                    {this.state.service.nombre}
                </button>
            </div >
        )
    }
}

Card.propTypes = {
    service: PropTypes.object.isRequired
}

