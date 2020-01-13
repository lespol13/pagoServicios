import React from 'react'
import PropTypes from 'prop-types';

const Card = ({ property }) => {
    const { id, url } = property;
    return (
        <div id={`card-${id}`} className="card">
            <img src={url} alt={service} />
            <div className="details">
                <span className="index">{id + 1}</span>
                <p className="location">
                    Servicio
                </p>
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;