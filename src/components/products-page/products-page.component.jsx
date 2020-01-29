import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Products from '../products/products.component';
import Input from '../input/input.component';
import './products-page.component.scss';
import Payment from '../../services/payment.service'

export default class ProductosPage extends Component {
    // -----------------------------------------------------------
    constructor(props) {
        super(props)
        this.state = {
            paymentType: 1
        }
    }
    // -----------------------------------------------------------
    static propTypes = {
        products: PropTypes.array.isRequired,
        carouselIndex: PropTypes.number.isRequired,
        phoneNumber: PropTypes.string.isRequired,
        setPhoneNumber: PropTypes.func.isRequired,
        referenceNumber: PropTypes.string,
        setReferenceNumber: PropTypes.func,
        amount: PropTypes.string,
        setAmount: PropTypes.func   
    }
    // -----------------------------------------------------------
    componentDidMount() {
        const { products } = this.props;
        
        this.props.setReferenceNumber(String.fromCharCode(32).trim());
        this.props.setPhoneNumber(String.fromCharCode(32).trim());

        window.addEventListener('keypress', (event) => {
            const eventKey = event.key
            //If product type is 1
            if (products[0].paymentType === 1) {
                this.setPhoneNumber(eventKey);
            } 
            // If product type needs reference and amount
            else {
                const { referenceNumber } = this.props;
                if (!Payment.isReferenceNumberValid(referenceNumber)) {
                    this.setReferenceNumber(eventKey)
                } else {
                    this.setAmount(eventKey)
                }
            }
        }, false);
    }
    // -----------------------------------------------------------
    componentWillUnmount() {
        window.removeEventListener('keypress', () => {}, false);
    }
    // -----------------------------------------------------------
    validateNumbers(key) {
        return /[0-9]/.test(key)
    }
    // -----------------------------------------------------
    setPhoneNumber(key) {
        const { phoneNumber } = this.props;
        const phoneRegex = /[0-9]{10}/
        if (this.validateNumbers(key) && !phoneRegex.test(phoneNumber)) {
            this.props.setPhoneNumber(phoneNumber.concat(key))
        } 
    }
    // -----------------------------------------------------
    setReferenceNumber(key) {
        const { referenceNumber } = this.props;
        const referenceRegex = /[0-9]{9,12}/
        if (this.validateNumbers(key) && !referenceRegex.test(referenceNumber)) {
            this.props.setReferenceNumber(referenceNumber.concat(key))
        } 
    }
    // -----------------------------------------------------
     setAmount(key) {
        const { amount } = this.props;
        const amountRegex = /[0-9]{7}/
        if (this.validateNumbers(key) && !amountRegex.test(amount)) {
            this.props.setAmount(amount.concat(key))
        } 
    }
    // -----------------------------------------------------
    render() {
        const { carouselIndex, products, phoneNumber, referenceNumber, amount } = this.props;
        const isReferencePayment = (products[0].paymentType === 2)
        const isPhoneNumberValid = Payment.isPhoneNumberValid(phoneNumber)
        const isReferenceNumberValid = Payment.isReferenceNumberValid(referenceNumber)
        const isAmountValid = Payment.isAmountValid(amount);
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
                            number={referenceNumber}
                            valid={isReferenceNumberValid}/>
                        <Input 
                            text="Monto"
                            type='amount'
                            number={amount}
                            valid={!isReferenceNumberValid && !isAmountValid}/>
                    </React.Fragment>
                    ) : (
                        <Input 
                            text="Número Telefonico"
                            number={phoneNumber}
                            valid={isPhoneNumberValid}/>
                    )}
                </div>
            </React.Fragment>
        )
    }
}