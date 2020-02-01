

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './input.component.scss';

export default class Input extends Component {
    options = {
        style: 'currency', 
        currency: 'MXN',
        minimumFractionDigits: 2
    }
    currencyFormatter = new Intl.NumberFormat('ex-MX', this.options)
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
        const numbers = value.split('');
        let amount;
        if (l > 3 ) {
            amount = `${value.substr(0, l-2)}.${value.substr(l-2, l)}`
        }
        else if (l === 3) {
            amount = `0${numbers[0]}.${numbers[1]}${numbers[2]}`
        } 
        else if (l === 2) {
            amount = `00.${numbers[0]}${numbers[1]}`
        }  
        else if (l === 1) {
            amount = `00.0${numbers[0]}`
        }
        else {
            amount = '00.00'
        }
        return this.currencyFormatter.format(amount)
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