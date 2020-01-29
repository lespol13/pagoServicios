import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './services.component.scss';
import Card from '../card/card.component'

export default class Services extends Component {
  // -----------------------------------------------------
  static propTypes = {
    services: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired, 
    carouselIndex: PropTypes.number.isRequired   
  }
  // -----------------------------------------------------------
  render() {
    
    const  { carouselIndex, services, onClick } = this.props;

    if (!services) {
      return <p className="loading">Cargando...</p>
    }
    return (
      <div className={`services-slider active-slide-${carouselIndex}`}>
        <div className="services-slider-wrapper" style={{
          'transform': `translateX(-${(carouselIndex) * (100/ (services.length))}%)`
        }}>
          {
            services.map((service, index) => 
            <Card 
              key={index} 
              index={index}
              element={service} 
              event={() => onClick(service.id)}
            />
            )
          }
        </div>
      </div>
    );
  }
}
