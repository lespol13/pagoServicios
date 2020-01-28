

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './input.component.scss';

export default class Input extends Component {
    // -----------------------------------------------------
    static propTypes = {
        text: PropTypes.string.isRequired    
    }
    // -----------------------------------------------------
    render() {
        const {text, number} = this.props;
        return (
            <div className="service-input">
                <div>{text}</div>
                <div>{number}</div>
            </div>
        )
    }
    // -----------------------------------------------------
}