import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Products from '../products/products.component';
import Input from '../input/input.component';
import './products-page.component.scss';

export default class ProductosPage extends Component {
    // -----------------------------------------------------------
    constructor(props) {
        super(props)
        this.state = {
            paymentType: 1,
            paymentData: props.payment.toJson()
        }
        this.props.payment.attach(this)
    }
    // -----------------------------------------------------------
    static propTypes = {
        products: PropTypes.array.isRequired,
        carouselIndex: PropTypes.number.isRequired,
        payment: PropTypes.object.isRequired,
    }
    // -----------------------------------------------------------
    notify(paymentData) {
        this.setState({paymentData})
    }
    // -----------------------------------------------------------
    componentDidUpdate() {
        const { payment } = this.props
        const { paymentData } = this.state
        const { reference } = paymentData

        switch (payment.inputIndex) {
            case 2: if (reference.valid) { payment.setInputIndex(3) } break;
            default:
        }
    }
    // -----------------------------------------------------------
    componentDidMount() {
        // console.log('componentDidMount')
        const { products, payment } = this.props;
        //const paymentType = products[0].paymentType;
        // this.setState({paymentType})
        payment.setInputIndex(3)
        window.addEventListener('keypress', event => this.keyboardListener(event.key), false);
    }
    // -----------------------------------------------------------
    keyboardListener(eventKey) {
        const { payment } = this.props;
        payment.addCharToProperty(eventKey)
    }
    // -----------------------------------------------------------
    componentWillUnmount() {
        window.removeEventListener('keypress', event => this.keyboardListener(event), false);
    }
    // -----------------------------------------------------
    render() {
        const { carouselIndex, products } = this.props;
        const { paymentType, paymentData } = this.state;
        const isReferencePayment = (paymentType === 2)
        return (
            <React.Fragment>
                <Products 
                    carouselIndex={carouselIndex}
                    products={products}/>{/*Carousel Products*/}
                <div className="input-container">
                    {isReferencePayment ? (
                    <React.Fragment>
                        <Input 
                            text="Referencia"
                            number={paymentData.reference.value}
                            valid={paymentData.reference.valid}/>
                        <Input 
                            text="Monto"
                            type='amount'
                            number={paymentData.amount.value}
                            valid={!paymentData.reference.valid}/>
                    </React.Fragment>
                    ) : (
                        <Input 
                            text="Número Telefonico"
                            number={paymentData.phoneNumber.value}
                            valid={paymentData.phoneNumber.valid}/>
                    )}
                </div>
            </React.Fragment>
        )
    }
}