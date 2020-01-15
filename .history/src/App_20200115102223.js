import React, { Component } from 'react';
import './App.scss';
import Card from './Card';
import { data, data2 } from './data/data'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      services: data.services,
      service: data.services[0]
    }
  }

  getServices = () => {
    this.setState({
      services: data2.services,

    })
  }
  nextService = () => {
    const newIndex = this.state.service._id + 1;
    this.setState({
      service: data.services[newIndex]
    })
  }

  prevService = () => {
    const newIndex = this.state.service._id - 1;
    this.setState({
      service: data.services[newIndex]
    })
  }

  render() {
    const { services, service } = this.state;
    return (
      <div className="App">

        <div className="page">
          <div className="col">
            <div className={`cards-slider active-slide-${service._id}`}>
              <div className="cards-slider-wrapper" style={{
                'transform': `translateX(-${service._id * (100 / services.length)}%)`
              }}>
                {
                  services.map(service => <Card key={service._id} service={service} />)
                }
              </div>
            </div>
          </div>
        </div>

        <div className="buttonContainer">
          <div className="left">
            <button
              onClick={() => this.prevService()}
              disabled={service._id === 0}
            >Anterior</button>
          </div>
          <div className="right">
            <button
              onClick={() => this.nextService()}
              disabled={service._id === data.services.length - 1}
            >Siguiente</button>
          </div>
        </div>

      </div >
    );
  }
}

export default App;