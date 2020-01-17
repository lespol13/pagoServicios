import React, { Component } from 'react';
import './App.scss';
import Card from './components/Card';
import ButtonName from './components/buttonName'
// import getServices from './data/servicesFetch'
// import data from './data/servicesFetch'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      services: [],
      service: [],
      // loading: false
    }
  }

  async componentDidMount() {
    // { this.setState({ loading: true }) }
    const response = await fetch('http://localhost:8090/test');
    const data = await response.json();
    this.setState({
      services: data.docs,
      service: data.docs[0],
      // loading: false
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

  holaMundo = () => {
    console.log("Hola Mundo")
  }

  // onClick = (id) => {
  //   // this.setState({ loading: true })
  //   fetch('data.json')
  //     .then(res => { return res.json() })
  //     .then(json => {
  //       this.setState({
  //         services: json.docs,
  //         service: json.docs[0],
  //         // loading: false
  //       })
  //     }).catch((err) => {
  //       console.log(err);
  //     });
  // }

  render() {
    const { services, service } = this.state;

    // if (loading) {
    //   return <p>Cargando...</p>
    // }

    return (
      < div className="App" >
        <div className="page">
          <div className="col">
            <div className={`cards-slider active-slide-${service._id}`}>
              <div className="cards-slider-wrapper" style={{
                'transform': `translateX(-${service._id * (100 / services.length)}%)`
              }}>
                {
                  services.map(service => <div><Card key={service._id} service={service} /*event={this.onClick(service._id)}*/ />
                    <ButtonName event={() => this.holaMundo()}
                      id={service._id}
                      name={this.state.service.nombre} /></div>)
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
              disabled={service._id === this.state.services.length - 1}
            >Siguiente</button>
          </div>
        </div>
      </div >
    );
  }
}

export default App;