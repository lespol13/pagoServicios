

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './input.component.scss';

export default class Input extends Component {
    // -----------------------------------------------------
    static propTypes = {
        text: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        valid: PropTypes.bool.isRequired,
        type: PropTypes.string    
    }
    // -----------------------------------------------------
    amountFormat(value) {
        const l = value.length;
        let amount;
        if (l > 2 ) {
            amount = `${value.substr(0, l-2)}.${value.substr(l-2, l)}`
        } else if (l > 1) {
            amount = `${value}.00`
        } else {
            amount = '00.00'
        }
        return `$ ${amount}`
    }
    // -----------------------------------------------------
    render() {
        let {text, number, valid, type} = this.props;
        const clazz = !valid ? 'invalid' : null;
        if (type === 'amount') {
            number = this.amountFormat(number); 
        }
        return (
            <div className={`service-input ${clazz}`}>
                <div>{text}</div>
                <div>{number}</div>
            </div>
        )
    }
    // -----------------------------------------------------
}