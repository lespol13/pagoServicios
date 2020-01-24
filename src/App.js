import React, { Component } from 'react';
import './App.scss';
import Card from './components/card/card.component';
import Button1 from './components/button1/button.component';
// import data from './data/services';
// import data2 from './data/services2';
import mock from './data/data.mock';
// import Api from './services/api.service';
// import services from './data/services';
// import getServices from './data/servicesFetch'

class App extends Component {
  principalServices = [];
  service = [];
  subServices = [];
  services = [];
  // -----------------------------------------------------------
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      service: [],
      loading: false,
      carouselIndex: 0,
      servicesIndex: 0,
    }
    this.prevCarouselItem = this.prevCarouselItem.bind(this)
    this.nextCarouselItem = this.nextCarouselItem.bind(this)
    this.back = this.back.bind(this)
  }
  // -----------------------------------------------------------
  async componentDidMount() {
    /*this.setState({ loading: true })*/
    /* data = await Api.findDatos();
    this.services[0] = data.services;
    this.setState({
      services: this.services[0],
      service: this.services[0][0],
      loading: false
    })*/
    const {servicesIndex} = this.state;
    this.services[servicesIndex] = mock;
    this.setState({
      services: this.services[servicesIndex],
      service: this.services[servicesIndex][0]
    })
  }
  // -----------------------------------------------------------
  updateServices(servicesIndex) {
    this.setState({
      servicesIndex,
      services: this.services[servicesIndex],
      service: this.services[servicesIndex][0],
      loading: false,
      carouselIndex: 0,
    })
  }
  // -----------------------------------------------------------
  nextCarouselItem() {
    let { carouselIndex, services } = this.state;
    if (carouselIndex !== services.length - 1) {
      carouselIndex++;
      this.updateCarouselState(carouselIndex, services)
    }
  }
  // -----------------------------------------------------------
  prevCarouselItem() {
    let { carouselIndex, services } = this.state;
    if (carouselIndex !== 0) {
      carouselIndex--
      this.updateCarouselState(carouselIndex, services)
    }
  }
  // -----------------------------------------------------------
  updateCarouselState(carouselIndex, services) {
    this.setState({
      carouselIndex,
      service: services[carouselIndex]
    })
  }
  // -----------------------------------------------------------
  handleClick = async (serviceId) => {
    let { servicesIndex, service } = this.state;
    const { id  } = service;
    servicesIndex++;
    if (servicesIndex > 2) return;
    if (id === serviceId) { 
      this.setMockProducts(servicesIndex, id)
    }
  }
  // -------------------------------------------------------------
  setMockProducts(servicesIndex, id) {
    const products = this.state.services.find(item => item.id === id).products;
    if (products) {
      this.services[servicesIndex] = products
      this.updateServices(servicesIndex)
    }
  }
  // -----------------------------------------------------------
  back() {
    let { servicesIndex } = this.state;
    servicesIndex--;
    if (servicesIndex > -1) {
      this.updateServices(servicesIndex)
    } else {
      this.setState({servicesIndex})
    }
  }
  // -----------------------------------------------------------
  render() {
    const { carouselIndex, servicesIndex, services, service, loading } = this.state;
    const { id } = service;

    if (servicesIndex < 0) {
      return <p className="loading">Página anterior</p>
    }

    if (loading) {
      return <p className="loading">Cargando...</p>
    }
    return (
      <div className="App" >
        <div className="page">
          <div className="col">
            <div className={`cards-slider active-slide-${carouselIndex}`}>
              <div className="cards-slider-wrapper" style={{
                'transform': `translateX(-${(carouselIndex) * (100/ (services.length))}%)`
              }}>
                {
                  services.map((service, index) => 
                    <Card 
                      key={index} 
                      index={index}
                      element={service} 
                      event={() => this.handleClick(id)}
                    />
                  )
                }
              </div>
            </div>
          </div>
        </div>
        <div className="buttonContainer">
          <div className="left">
            <Button1
              onClick={this.prevCarouselItem}
              text="Anterior">
            </Button1>{/*Button 1*/}
            <Button1
              onClick={this.back}
              text="Regresar">
            </Button1>{/*Button 1*/}
          </div>
          <div className="right">
            <Button1
              onClick={this.nextCarouselItem}
              text='Siguiente'>
            </Button1>{/*Button 1*/}
            <Button1
              onClick={() => this.handleClick(id)}
              text='Seleccionar'>
            </Button1>{/*Button 1*/}
          </div>
        </div>
      </div >
    );
  }
}

export default App