// import React from 'react';
// import PropTypes from 'prop-types';

// const Card = ({ service }) => {
//     const { _id, url, nombre } = service;
//     return (
//         <div id={`card-${_id}`} className="card">
//             <img src={url} alt={service} onClick={props.onClick} />
//             <div className="name">
//                 <p>{nombre}<br />
//                 </p>
//             </div>
//         </div>
//     )
// }

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
                <img src={this.state.service.url} alt={this.state.service} onClick={props.onClick} />
                <div className="name">
                    <p>{this.state.service.nombre}<br />
                    </p>
                </div>>

            </div>
        )
    }
}

Card.propTypes = {
    service: PropTypes.object.isRequired
}

export default Card;