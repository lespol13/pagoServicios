import React, { Component } from 'react';
import './App.scss';
import Card from './Card';
import data from './data/servicesFetch'
import getServices from './data/servicesFetch'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      services: data.docs,
      service: data.docs[0]
    }
  }

  componentDidMount() {
    getData();
  }

  getData = () => {
    let data;
    getServices(data);
  }

  nextService = () => {
    const newIndex = (this.state.service._id - 1) + 1;
    this.setState({
      service: data.docs[newIndex]
    })
  }

  prevService = () => {
    const newIndex = (this.state.service._id - 1) - 1;
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
              disabled={service._id === data.docs.length - 1}
            >Siguiente</button>
          </div>
        </div>

      </div >
    );
  }
}

export default App;