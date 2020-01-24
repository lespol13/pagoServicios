import React, { Component } from 'react';
import './App.scss';
// import Card from './components/Card';
import Card from './components/card/card.component';
import Api  from './services/api.service';
import data from './data/services';
import data2 from './data/services2';
import Button1 from './components/button1/button.component';
// import getServices from './data/servicesFetch'

class App extends Component {
  firstLevel = null;
  secondLevel = null;
  // --------------------------------------------------
  constructor(props) {
    super(props);
    this.state = {
      services: data.services,
      service: data.services[0],
      loading: false,
      position: 0
    }
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)
  }
  // --------------------------------------------------
  componentDidMount() {
    console.log('component did mount')
    // this.setState({ loading: true })

    // const response = await fetch('http://10.255.11.201:8090/datos/findDatos');
    // const data = await response.json();
    // console.log(data)
    // this.firstLevel = await Api.findDatos();
    // console.log(this.firstLevel)
    // const { services } = this.firstLevel;
    /*this.setState({
      services: data.services,
      service: data.services[0],
      //loading: false
    })*/
  }
  // --------------------------------------------------
  prev() {
    const newIndex = (this.state.service._id) - 1;
    this.setState({
      service: this.state.services[newIndex]
    })
  }
  // --------------------------------------------------
  next() {
    const newIndex = (this.state.service._id) + 1;
    this.setState({
      service: this.state.services[newIndex]
    })
  }
  // ------------------------------i--------------------
  handleClick = async (id) => {
    console.log('handle click')
    /*.setState({ loading: true })
    this.secondLevel = await Api.secondLevel(id)
    // console.log(this.secondLevel)
    const keys = Object.keys(this.secondLevel)
    const data = this.secondLevel[keys[0]]
    */
    this.setState({
      services: data2.services,
      service: data2.services[0],
      // loading: false,
      position: 1
    })
  }
  // ------------------------------i--------------------
  render() {
    
    const { services, service, loading } = this.state;
    
    if (loading) {
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
                  services.map(s => 
                    <Card 
                      key={s._id} 
                      element={s} 
                      event={() => this.handleClick(s._id)}
                    />
                  )
                }
              </div>
            </div>
          </div>
        </div>{/* Page */}
        <div className="buttonContainer">
          <div className="left">
            <Button1
              onClick={this.prev}
              disabled={service._id === 0}
              text="Anterior">
            </Button1>
          </div>
          <div className="right">
            <Button1
              onClick={this.next}
              disabled={service._id === services.length - 1}
              text='Siguiente'>
            </Button1>
          </div>
        </div>{ /*Button Container*/}
      </div>
    );
  }
}

export default App;