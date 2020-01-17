import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            service: this.props.service
        }
    }

    holaMundo = (a) => {
        console.log(a)
    }

    render() {
        return (
            <div id={`card-${this.state.service._id}`} className="card">
                <img src={this.state.service.url} alt={this.state.service} />
                <button onClick={() => this.holaMundo("Hola mundo")} className="buttonName">
                    {this.state.service.nombre}
                </button>
                <div>
                    <button type="button" className="prueba" onClick={() => { console.log("Hola Mundo") }}>PRUEBA</button>
                </div>

            </div >
        )
    }
}

Card.propTypes = {
    service: PropTypes.object.isRequired
}

