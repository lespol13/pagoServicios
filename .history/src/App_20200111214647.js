import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends Component {

  constructor(props){
    super(props)
    this.state={
      services:[],
      servicesImg:[]
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
      <div>
        
      </div>
    )
  }
}
