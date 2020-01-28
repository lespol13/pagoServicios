import React, { Component } from 'react';
import './App.scss';
import Card from './components/card/card.component';
import Button1 from './components/button1/button.component';
// import data from './data/services';
// import data2 from './data/services2';
// import mock from './data/data.mock';
import Api from './services/api.service';
// import services from './data/services';
// import getServices from './data/servicesFetch'
import Products from './components/products/products.component';
import Input from './components/input/input.component';

class App extends Component {
  services = [];
  currentCategoryId;
  currentProduct;
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
    this.handleProductClick = this.handleProductClick.bind(this)
    this.setProduct = this.setProduct.bind(this)
  }
  // -----------------------------------------------------------
  async componentDidMount() {
    console.log('componentDidMount')
    this.setState({ loading: true });
    const data = await Api.getCategories();
    this.services[0] = data.body[0];
    console.log(this.services[0])
    this.setState({
      services: this.services[0],
      service: this.services[0][0],
      loading: false
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
  handleClick = async (itemId) => {
    let { servicesIndex, service } = this.state;
    const { id  } = service;
    servicesIndex++;
    if (id === itemId) { 
      if (servicesIndex === 1) {
        this.currentCategoryId = itemId;
        this.getServices(servicesIndex, itemId);
      } else if (servicesIndex === 2) {
        this.getProducts(servicesIndex, this.currentCategoryId, itemId)
      }
      
    }
  }
  // -------------------------------------------------------------
  async getServices(servicesIndex, categoryId) {
    this.setState({ loading: true })
    const data = await Api.getServices(categoryId)
    this.services[servicesIndex] = data.body[0]
    this.updateServices(servicesIndex)
  }
  // -------------------------------------------------------------
  async getProducts(servicesIndex, categoryId, serviceId) {
    this.setState({ loading: true });
    const data = await Api.getProducts(categoryId, serviceId);
    this.services[servicesIndex] = data.body[0][0].products;
    this.updateServices(servicesIndex)
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
  // ----------------------------------------------------------------
  setProduct(product) {
    console.log('setProduct', product)
    this.product = product
  }
  // ----------------------------------------------------------------
  handleProductClick() {
    console.log('handleProductClick')
  }
  // ----------------------------------------------------------------
  servicios(carouselIndex, services, id) {
    return (
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
    )
  }
  // -----------------------------------------------------------
  render() {
    console.log('render', this.state)

    const { carouselIndex, servicesIndex, services, service, loading } = this.state;
    const { id } = service;
    const isProductIndex = servicesIndex === 2;

    if (servicesIndex < 0) {
      return <p className="loading">Página anterior</p>
    }

    if (loading || !services) {
      return <p className="loading">Cargando...</p>
    }

    return (
      <div className="App" onKeyDown={this.handleKeyDown} >
        <div className="page">
          <div className="col">
            {servicesIndex < 2 ? (
              this.servicios(carouselIndex, services, id)
            ) : (
              <React.Fragment>
                <Products 
                  carouselIndex={carouselIndex}
                  products={services}
                  onClick={this.setProduct}/>
                <Input 
                  text="Número Telefonico"
                  number="5512345678"/>
              </React.Fragment>
            )}
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
              text="Borrar">
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
              onClick={!isProductIndex ? () => this.handleClick(id): this.handleProductClick}
              text={!isProductIndex ? 'Seleccionar' : 'Confirmar'}>
            </Button1>{/*Button 1*/}
          </div>
        </div>
      </div >
    );
  }
}

export default App