
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './button.component.scss';

export default class Button1 extends Component {
    // -----------------------------------------------------
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        disabled: PropTypes.bool,
        text: PropTypes.string.isRequired    
    }
    // -----------------------------------------------------
    render() {
        const { onClick, disabled, text } = this.props
        return (
            <button
                onClick={onClick}
                disabled={disabled}>
                {text}
            </button>
        )
    }
    // -----------------------------------------------------
}