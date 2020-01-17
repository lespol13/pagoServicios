import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            service: this.props.service,
            onClick: this.props.onClick
        }
    }
    render() {
        return (
            <div id={`card-${this.state.service._id}`} className="card">
                <img src={this.state.service.url} alt={this.state.service} onClick={this.state.onClick} />
                <div className="name">
                    <p>{this.state.service.nombre}<br />
                    </p>
                </div>

            </div>
        )
    }
}

Card.propTypes = {
    service: PropTypes.object.isRequired
}

// export default Card;