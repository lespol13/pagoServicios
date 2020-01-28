import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './products.component.scss';
import Product from '../product/product.component';

export default class Products extends Component {
  // -----------------------------------------------------
  static propTypes = {
    onClick: PropTypes.func.isRequired, 
    carouselIndex: PropTypes.number.isRequired   
  }
  componentDidMount() {
    window.addEventListener('keypress', (event) => {
      console.log(event)
    }, false);
  }
  // -----------------------------------------------------------
  componentWillUnmount() {
    window.removeEventListener('keypress', () => {}, false);
  }
  // -----------------------------------------------------------
  render() {
    
    const  { carouselIndex, products } = this.props;
    // console.log('render', carouselIndex)

    if (!products) {
      return <p className="loading">Cargando...</p>
    }
    return (
      <div className={`products-slider active-slide-${carouselIndex}`}>
        <div className="products-slider-wrapper" style={{
          'transform': `translateX(-${(carouselIndex) * (100/ (products.length))}%)`
        }}>
          {
            products.map((product, index) => 
              <Product
                key={index} 
                index={index}
                product={product}
                number={5512345678}
                complete={false}
              />
            )
          }
        </div>
      </div>
    );
  }
}
