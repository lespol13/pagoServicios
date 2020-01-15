import React, { Component } from 'react';
import './App.scss';
import Card from './Card';
import { getServices } from './data/servicesFetch';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      services: [],
      service: []
    }
  }

  componentDidMount() {
    var data = getServices(this.state.services, this.state.service);
  }

  /* getServices = () => {
    this.setState({
      services: data2.services,

    })
  } */

  nextService = () => {
    const newIndex = data.docs._id + 1;
    this.setState({
      service: data.docs[newIndex]
    })
  }

  prevService = () => {
    const newIndex = data.docs._id - 1;
    this.setState({
      service: data.docs[newIndex]
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
              disabled={service._id === data.docs - 1}
            >Siguiente</button>
          </div>
        </div>

      </div >
    );
  }
}

export default App;