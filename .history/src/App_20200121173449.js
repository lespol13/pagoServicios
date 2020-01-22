import React, { Component } from 'react';
import './App.scss';
import Card from './components/Card';
// import getServices from './data/servicesFetch'

class App extends Component {

  principalServices = [];
  service = [];
  subServices = [];

  constructor(props) {
    super(props);
    this.state = {
      services: [],
      service: [],
      loading: false
    }
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const response = await fetch('http://10.255.11.201:8090/datos/findDatos');
    const data = await response.json();
    this.principalServices = data.services;
    this.service = data.services[0];
    this.setState({
      services: this.principalServices,
      service: this.service,
      loading: false
    })
  }

  nextService = () => {
    const newIndex = (this.state.service._id) + 1;
    this.setState({
      service: this.state.services[newIndex]
    })
  }

  prevService = () => {
    const newIndex = (this.state.service._id) - 1;
    this.setState({
      service: this.state.services[newIndex]
    })
  }

  handleClick = async (id) => {
    this.setState({ loading: true })
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "dato": id })
    };
    const response = await fetch('http://10.255.11.201:8090/datos/insert', config);
    const data = await response.json();
    // console.log(data);
    const keys = Object.keys(data);
    this.subServices = data[keys[0]];
    this.service = data[keys[0]][0];
    this.setState({
      services: this.subServices,
      service: this.service,
      loading: false

    })
  }

  render() {
    const { services, service } = this.state;

    if (this.state.loading) {
      return <p className="loading">Cargando...</p>
    }

    return (
      < div className="App" >
        <div className="page">
          <div className="col">
            <div className={`cards-slider active-slide-${service._id}`}>
              <div className="cards-slider-wrapper" style={{
                'transform': `translateX(-${service._id * (100 / services.length)}%)`
              }}>
                {
                  services.map(service => <Card key={service._id} service={service} event={() => this.handleClick(service._id)} />)
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
            <button>Regresar</button>
          </div>
          <div className="right">
            <button
              onClick={() => this.nextService()}
              disabled={service._id === this.state.services.length - 1}
            >Siguiente</button>
            <button>Salir</button>
          </div>
        </div>
      </div >
    );
  }
}

export default App;