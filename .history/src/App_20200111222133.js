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
          {this.state.services.map(e => {
            return (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=First slide&bg=373940"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Second slide&bg=282c34"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Third slide&bg=20232a"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>         
            )
          })}
        </Carousel>

      </div>
    )
  }
}
