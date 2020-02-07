import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Products from '../products/products.component';
import Input from '../input/input.component';
import './products-page.component.scss';

export default class ProductosPage extends Component {
    // -----------------------------------------------------------
    static propTypes = {
        products: PropTypes.array.isRequired,
        carouselIndex: PropTypes.number.isRequired,
        payment: PropTypes.object.isRequired,
    }
    // -----------------------------------------------------------
    constructor(props) {
        super(props)
        this.state = {
            paymentType: 1,
        }
    }
    // -----------------------------------------------------------
    componentDidMount() {
        // console.log('componentDidMount')
        const { products, payment } = this.props;
        const paymentType = products[0].paymentType;
        console.log(paymentType)
        this.setState({paymentType})
        payment.subscribe(() => this.forceUpdate())
        window.addEventListener('keypress', event => this.keyboardListener(event.key), false);
    }
    // -----------------------------------------------------------
    componentWillUnmount() {
        const { payment } = this.props;
        payment.unsubscribe()
        window.removeEventListener('keypress', event => this.keyboardListener(event), false);
    }
    // -----------------------------------------------------------
    keyboardListener(eventKey) {
        const { payment } = this.props;
        payment.addCharToProperty(eventKey)
    }
    // -----------------------------------------------------
    render() {
        const { carouselIndex, products, payment } = this.props;
        const { paymentType}  = this.state;
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
                            model={payment.reference}
                            inputIndex={payment.inputIndex}/>
                        <Input 
                            type='amount'
                            model={payment.amount}
                            inputIndex={payment.inputIndex}/>
                    </React.Fragment>
                    ) : (
                        <Input 
                            model={payment.phoneNumber}
                            inputIndex={payment.inputIndex}/>
                    )}
                </div>
            </React.Fragment>
        )
    }
}