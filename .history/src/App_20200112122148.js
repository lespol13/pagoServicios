import React, { Component } from 'react'
import './App.css';
import Card from '/Card';
import servicesImg from '/components/Services'
export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      servicesImg: servicesImg.servicesImg,
      serviceImg: servicesImg.serviceImg[0]
    }
  }

  /* componentDidMount() {
    fetch('http://localhost:8090/test')
      .then(res => { return res.json() })
      .then(json => {
        this.setState({
          services: json.docs,
        })
      }).catch((err) => {
        console.log(err);
      });
  } */

  nextProperty = () => {
    const newIndex = this.state.serviceImg.index + 1;
    this.setState({
      serviceImg: servicesImg.servicesImg[newIndex]
    })
  }

  prevProperty = () => {
    const newIndex = this.state.serviceImg.index - 1;
    this.setState({
      serviceImg: servicesImg.servicesImg[newIndex]
    })
  }

  render() {
    return (
      <div className="principal">
        <Carousel>
          {this.state.servicesImg.map(e => {
            return (
              <Carousel.Item>
                <img
                  height="50%"
                  className="d-block w-100"
                  src={e.url}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Servicio</h3>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })}
        </Carousel>
      </div>
    )
  }
}
