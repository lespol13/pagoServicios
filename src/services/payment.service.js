
export default class PaymentService {
    static PHONE_NUMBER_LENGTH = 10;
    static REFERENCE_NUMBER_LEGTH = 9
    static AMOUNT_NUMBER_LEGTH = 2
    static PHONE_NUMBER = 'phoneNumber'
    // -----------------------------------------------------------
    static setReferenceNumber(referenceNumber) {
        this.setState({referenceNumber});
    }
    // -----------------------------------------------------------
    static setAttribute(key, value) {
        this.setState({[key]: value});
    }
    // -----------------------------------------------------------
    static setPhoneNumber(phoneNumber) {
        this.setState({phoneNumber});
    }
    // -----------------------------------------------------------
    static setAmount(amount) {
        this.setState({amount});
    }
    // -----------------------------------------------------------
    static isAmountValid(value) {
        return value === PaymentService.AMOUNT_NUMBER_LEGTH;
    }
    // -----------------------------------------------------------
    static isPhoneNumberValid(value) {
        return value.length === PaymentService.PHONE_NUMBER_LENGTH
    }
    // -----------------------------------------------------------
    static clearPhoneNumber() {
        const { phoneNumber } = this.state;
        const pl = phoneNumber.length;
        if (pl > 0) {
            this.setState({
                phoneNumber: phoneNumber.substr(0, pl - 1)
            })
        }
    }
    // -----------------------------------------------------------
    static clearReferenceNumber() {
        const { referenceNumber } = this.state;
        const pl = referenceNumber.length;
        if (pl > 0) {
            this.setState({
                referenceNumber: referenceNumber.substr(0, pl - 1)
            })
        }
    }
    // -----------------------------------------------------------
    static clearAmount() {
        const { amount } = this.state;
        const pl = amount.length;
        if (pl > 0) {
            this.setState({
                amount: amount.substr(0, pl - 1)
            })
        }
    }
    // -----------------------------------------------------------
    static isReferenceNumberValid(value) {
        return value.length === PaymentService.REFERENCE_NUMBER_LEGTH
    }
    // -----------------------------------------------------------
    static setIndexInput(indexInput) {
        this.setState({indexInput});
    }
    // -----------------------------------------------------------

}