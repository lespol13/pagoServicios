

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './input.component.scss';

export default class Input extends Component {
    // -----------------------------------------------------
    static propTypes = {
        model: PropTypes.object.isRequired,
        inputIndex: PropTypes.number,
        type: PropTypes.string    
    }
    // -----------------------------------------------------
    options = {
        style: 'currency', 
        currency: 'MXN',
        minimumFractionDigits: 2
    }
    currencyFormatter = new Intl.NumberFormat('ex-MX', this.options)
    // -----------------------------------------------------
    componentDidMount() {
        const { model } = this.props;
        model.reset()
        model.subscribe(() => this.forceUpdate())
    }
    // -----------------------------------------------------
    componentWillUnmount() {
        const { model } = this.props;
        model.unsubscribe()
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
        const { inputIndex, type, model } = this.props;
        let { name, value, valid, index } = model;
        const clazz = inputIndex === index && !valid ? 'active' : null;

        if (type === 'amount') {
            value = this.amountFormat(model.value); 
        }

        return (
            <div className={`service-input ${clazz}`}>
                <div>{name}</div>
                <div>{value}</div>
            </div>
        )
    }
    // -----------------------------------------------------
}