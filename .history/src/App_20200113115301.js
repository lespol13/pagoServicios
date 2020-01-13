import React, { Component } from 'react';
import './App.scss';
import Card from './Card';
import data from './data/data'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      services: data.services,
      service: data.services[0]
    }
  }

  nextService = () => {
    const newIndex = this.state.service.id + 1;
    this.setState({
      service: data.services[newIndex]
    })
  }

  prevService = () => {
    const newIndex = this.state.service.id - 1;
    this.setState({
      service: data.services[newIndex]
    })
  }

  render() {
    const { properties, property } = this.state;
    return (
      <div className="App">

        <button
          onClick={() => this.nextProperty()}
          disabled={property.index === data.properties.length - 1}
        >Next</button>
        <button
          onClick={() => this.prevProperty()}
          disabled={property.index === 0}
        >Prev</button>

        <div className="page">
          <div className="col">
            <div className={`cards-slider active-slide-${property.index}`}>
              <div className="cards-slider-wrapper" style={{
                'transform': `translateX(-${property.index * (100 / properties.length)}%)`
              }}>
                {
                  properties.map(property => <Card key={property._id} property={property} />)
                }
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;