
export default class Payment {
    static PHONE_NUMBER_LENGTH = 10;
    static REFERENCE_NUMBER_LEGTH = 10
    static AMOUNT_NUMBER_LEGTH = 2
    // -----------------------------------------------------------
    static setReferenceNumber(referenceNumber) {
        this.setState({referenceNumber});
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
        return value === Payment.AMOUNT_NUMBER_LEGTH;
    }
    // -----------------------------------------------------------
    static isPhoneNumberValid(value) {
        return value.length === Payment.PHONE_NUMBER_LEGTH
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
    static isReferenceNumberValid(value) {
        return value.length === Payment.REFERENCE_NUMBER_LEGTH
    }
    // -----------------------------------------------------------

}