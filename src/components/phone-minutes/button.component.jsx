
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './button.component.scss';

export default class PhoneMinutes extends Component {
    // -----------------------------------------------------
    static propTypes = {
        onClick: PropTypes.func.isRequired,  
    }
    // -----------------------------------------------------
    render() {
        return (
            <div>
                <div>
                    <div>Número celular</div>
                    <div>55 12 34 56 78</div>
                </div>
                <div>
                    <div>Monto ingresado</div>
                    <div>$500.00</div>
                </div>
            </div>
        )
    }
    // -----------------------------------------------------
}