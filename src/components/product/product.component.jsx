import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './product.component.scss';
//import emptyImagen from '../../img/link_off-24px.svg';

export default class Product extends Component {
    static propTypes = {
        product: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired    
    }
    // -----------------------------------------------------------
    render() {
        let { name } = this.props.product;
        return (
            <div id={`product-${this.props.index}`} className="product" onClick={this.props.onClick}>
                <p className="name">{name}</p>
            </div>
        )
    }
    // -----------------------------------------------------------
}


