import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ service }) => {
    const { _id, url, nombre } = service;
    return (
        <div id={`card-${_id}`} className="card">
            <img src={url} alt={service} />
            <div className="details">
                <span className="index">{_id + 1}</span>
                <p className="location">
                    {nombre}<br />
                </p>
            </div>
        </div>
    )
}

Card.propTypes = {
    service: PropTypes.object.isRequired
}

export default Card;