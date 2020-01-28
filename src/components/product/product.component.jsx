import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './product.component.scss';
//import emptyImagen from '../../img/link_off-24px.svg';

export default class Product extends Component {
    static propTypes = {
        product: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired    
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    // -----------------------------------------------------------
    render() {
        let { name } = this.props.product;
        // url = url ? url : emptyImagen;
        return (
            <div id={`product-${this.props.index}`} className="product" onClick={this.props.onClick}>
                {/*<img src={url} alt={name} />*/}
                <p className="name">{name}</p>
            </div>
        )
    }
    // -----------------------------------------------------------
}


