import React, { Component } from 'react'
import './App.css';
import Card from '/Card';
import data from '/components/Services'
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      servicesImg: data.servicesImg,
      serviceImg: data.servicesImg[0]
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
    const { servicesImg, serviceImg } = this.state;
    return (
      <div className="app">
        <button
          onClick={() => this.nextProperty()}
          disabled={serviceImg.index === servicesImg.lenght - 1}
        >Next</button>
        <button
          onClick={() => this.prevProperty()}
          disabled={serviceImg.index === 0}
        >Prev</button>

        <div className="page">
          <Card property={serviceImg} />
        </div>
      </div>
    )
  }
}
