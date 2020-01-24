import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './card.component.scss';
import emptyImagen from '../../img/link_off-24px.svg';

export default class Card extends Component {
    static propTypes = {
        element: PropTypes.object.isRequired,
        event: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired    
    }
    // -----------------------------------------------------------
    render() {
        let { nombre, name, url } = this.props.element;
        url = url ? url : emptyImagen;
        return (
            <div id={`card-${this.props.index}`} className="card" onClick={this.props.event}>
                <img src={url} alt={nombre || name} />
                <p className="name">{nombre || name}</p>
            </div>
        )
    }
    // -----------------------------------------------------------
}


