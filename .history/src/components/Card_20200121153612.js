import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            service: this.props.service
        }
    }

    // holaMundo = () => {
    //     console.log("Hola Mundo")
    // }
    componentWillReceiveProps(nextProps){
        // if(nextProps.someValue!==this.props.someValue){
        //   //Perform some operation
        //   this.setState({someState: someValue });
        //   this.classMethod();
        // }
        console.log(nextProps)
      }

    render() {
      
        return (
            <div id={`card-${this.state.service._id}`} className="card" onClick={this.props.event}>
                <img src={this.state.service.url} alt={this.state.service} />
                <p className="name">{this.state.service.nombre}</p>
            </div>
        )
    }
}

Card.propTypes = {
    service: PropTypes.object.isRequired
}

