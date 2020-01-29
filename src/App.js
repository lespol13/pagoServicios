import React, { Component } from 'react';
import './App.scss';
import Button1 from './components/button1/button.component';
// import mock from './data/data.mock';
import Api from './services/api.service';
import Payment from './services/payment.service';
import Services from './components/services/services.component';
import ProductsPage from './components/products-page/products-page.component';

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
      referenceNumber: '',
      phoneNumber: '',
      amount: '',
    }
    this.prevCarouselItem = this.prevCarouselItem.bind(this)
    this.nextCarouselItem = this.nextCarouselItem.bind(this)
    this.back = this.back.bind(this)
    this.handleProductClick = this.handleProductClick.bind(this)
    this.setPhoneNumber = Payment.setPhoneNumber.bind(this)
    this.clearPhoneNumber = Payment.clearPhoneNumber.bind(this)
    this.setReferenceNumber = Payment.setReferenceNumber.bind(this)
    this.setAmount = Payment.setAmount.bind(this)
    // this.clearAmount = this.clearAmount.bind(this)
  }
  // -----------------------------------------------------------
  async componentDidMount() {
    console.log('componentDidMount')
    this.setState({ loading: true });
    const data = await Api.getCategories();
    this.services[0] = data.body;
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
  // -----------------------------------------------------------
  handleProductClick() {
    // const { phoneNumber, servicesIndex, carouselIndex } = this.state
    // const product = this.services[servicesIndex][carouselIndex];
    this.showConfirmPage()
    /*switch (product.paymentType) {
      case 1:
        this.showConfirmPage()
        /*if (this.isPhoneNumberValid(phoneNumber)) {
          this.showConfirmPage()
        }
        break;
      case 2:
          break;
      default:
    }*/
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
  ConfirmPage() {
    return (
      <div>
        <p className="loading">Confirma tus datos</p>
        <div className="buttonContainer">
            <div className="left">
              <Button1
                onClick={this.back}
                text="Si">
              </Button1>{/*Button 1*/}
            </div>
            <div className="right">
              <Button1
                onClick={this.nextCarouselItem}
                text='NO'>
              </Button1>{/*Button 1*/}
            </div>
        </div>
      </div>
    )
  }
  // -----------------------------------------------------------
  render() {
    // console.log('render', this.state)

    const { showConfirmPage, amount, referenceNumber, phoneNumber, carouselIndex, servicesIndex, services, service, loading } = this.state;
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
                referenceNumber={referenceNumber}
                setReferenceNumber={this.setReferenceNumber}
                phoneNumber={phoneNumber}
                setPhoneNumber={this.setPhoneNumber}
                amount={amount}
                setAmount={this.setAmount}
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
                onClick={this.clearPhoneNumber}
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