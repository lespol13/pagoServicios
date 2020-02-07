import React, { Component } from 'react';
import './App.scss';
import Button1 from './components/button1/button.component';
import mock from './data/data.mock';
import Api from './services/api.service';
import Services from './components/services/services.component';
import ProductsPage from './components/products-page/products-page.component';
import Carousel from './services/corousel.service';
import PaymentModel from './models/payment.model';

class App extends Component {
  services = [];
  currentCategoryId;
  // -----------------------------------------------------------
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      service: [],
      loading: false,
      carouselIndex: 0,
      servicesIndex: 0,
      showConfirmPage: false,
      payment: new PaymentModel(),
    }
    this.back = this.back.bind(this)
    this.handleProductClick = this.handleProductClick.bind(this)
    //Carousel
    this.prevCarouselItem = Carousel.prevCarouselItem.bind(this)
    this.nextCarouselItem = Carousel.nextCarouselItem.bind(this)
    this.updateCarouselState = Carousel.updateCarouselState.bind(this)
    //Payment
    this.clearPaymentAttribute = this.clearPaymentAttribute.bind(this)
  }
  // -----------------------------------------------------------
  async componentDidMount() {
    /*this.setState({ loading: true });
    const data = await Api.getCategories();
    this.services[0] = data.body;
    this.setState({
      services: this.services[0],
      service: this.services[0][0],
      loading: false
    })*/
    this.setCategories()
  }
  // -----------------------------------------------------------
  setCategories() {
    this.services[0] = mock;
    this.setState({
      services: this.services[0],
      service: this.services[0][0],
    })
  }
  // -----------------------------------------------------------
  changeMockItems(id) {
    let { servicesIndex } = this.state;
    if (servicesIndex < 2) {
      const products = this.services[servicesIndex].find(service => service.id === id).products
      if (products) {
        servicesIndex++
        this.services[servicesIndex] = products
        this.updateServices(servicesIndex);
      }
    }
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
  handleClick = async (itemId) => {
    let { /*servicesIndex,*/ service } = this.state;
    const { id  } = service;
    //servicesIndex++;
    if (id === itemId) { 
      /*if (servicesIndex === 1) {
        this.currentCategoryId = itemId;
        this.getServices(servicesIndex, itemId);
      } else if (servicesIndex === 2) {
        this.getProducts(servicesIndex, this.currentCategoryId, itemId)
      }*/
      this.changeMockItems(itemId)
    }
  }
  // -----------------------------------------------------------
  handleProductClick() {
    // const { phoneNumber, servicesIndex, carouselIndex } = this.state
    // const product = this.services[servicesIndex][carouselIndex];
    //this.showConfirmPage()
    console.log(this.state.payment.toJson())
  }
  // -------------------------------------------------------------
  showConfirmPage() {
    this.setState({showConfirmPage: true})
  }
  // -------------------------------------------------------------
  async getServices(servicesIndex, categoryId) {
    this.setState({ loading: true })
    const data = await Api.getServices(categoryId)
    this.services[servicesIndex] = data.body
    this.updateServices(servicesIndex)
  }
  // -------------------------------------------------------------
  async getProducts(servicesIndex, categoryId, serviceId) {
    this.setState({ loading: true });
    const data = await Api.getProducts(categoryId, serviceId);
    this.services[servicesIndex] = data.body[0].products;
    this.updateServices(servicesIndex)
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
  ConfirmPage() {
    return (
      <div>Test</div>
    )
  }
  // -----------------------------------------------------------
  clearPaymentAttribute() {
    console.log('clearPaymentAttribute')
    const {payment} = this.state;
    payment.removeCharToProperty()
  }
  // -----------------------------------------------------------
  render() {
    // console.log('render', this.state)
    const { payment, showConfirmPage, carouselIndex, servicesIndex, services, service, loading } = this.state;
    const { id } = service;
    const isProductIndex = (servicesIndex === 2);
    
    if (showConfirmPage) {
      return this.ConfirmPage()
    }
    if (servicesIndex < 0) {
      return <p className="loading">Página anterior</p>
    }

    if (loading) {
      return <p className="loading">Cargando...</p>
    }
    
    return (
      <div className="App" onKeyDown={this.handleKeyDown} >
        <div className="page">
          <div className="col">
            {!isProductIndex ? (
              <Services 
                services={services}
                carouselIndex={carouselIndex}
                onClick={this.handleClick}
              />
            ) : (
              <ProductsPage
                products={services}
                carouselIndex={carouselIndex}
                payment={payment}
                setStateItem={this.setStateItem}
              />
            )}
          </div>
        </div>
        <div className="buttonContainer">
          <div className="left">
            <Button1
              onClick={this.prevCarouselItem}
              text="Anterior">
            </Button1>{/*Button 1*/}
            {isProductIndex && (
              <Button1
                onClick={this.clearPaymentAttribute}
                text="Borrar">
              </Button1>
            )}{/*Button 1*/}
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