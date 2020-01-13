import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      services: [],
      servicesImg: [
        {
          url: "http://paseolapaz.mx/wp-content/uploads/2013/05/LOGOS-ANCLAS-Y-LOCATARIOS_julio-2016_cfe.png"
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Logotipo_izzi_negativo.png"
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Logotipo_izzi_negativo.png"
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Logotipo_izzi_negativo.png"
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Logotipo_izzi_negativo.png"
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Logotipo_izzi_negativo.png"
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Logotipo_izzi_negativo.png"
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Logotipo_izzi_negativo.png"
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Logotipo_izzi_negativo.png"
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Logotipo_izzi_negativo.png"
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Logotipo_izzi_negativo.png"
        }
      ]
    }
  }

  componentDidMount() {
    fetch('http://localhost:8090/test')
      .then(res => { return res.json() })
      .then(json => {
        this.setState({
          services: json.docs,
        })
      }).catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="principal">
        <Carousel>
          {this.state.servicesImg.map(e => {
            return (
              <Carousel.Item>
                <img
                  width="50%"
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
