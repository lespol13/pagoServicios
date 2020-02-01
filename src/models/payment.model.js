
import Control from  './control.model';

export default class PaymentModel {
    phoneNumber = new Control(/[0-9]{10}/);
    reference = new Control(/[0-9]{12}/);
    amount = new Control(/[0-9]{7}/);
    PHONE_NUMBER = 'phoneNumber';
    REFERENCE = 'reference';
    AMOUNT = 'amount';
    inputIndex = 1;
    observers = [];
    // --------------------------------------------------
    attach(observer) {
        this.observers.push(observer)
    }
    // --------------------------------------------------
    notifyObservers() {
        this.observers.forEach(observer => observer.notify(this.toJson()))
    }
    // -----------------------------------------------------------
    addCharToProperty(key) {
        const property = this.currentProperty
        this[property].addChar(key, this.notifyObservers.bind(this))
    }
    // -----------------------------------------------------------
    removeCharToProperty() {
        const property = this.currentProperty
        this[property].removeChar(this.notifyObservers.bind(this));
    }
    // -----------------------------------------------------------
    setInputIndex(value) {
        this.inputIndex = value;
    }
    // -----------------------------------------------------------
    get currentProperty() {
        return  this.inputIndex === 2 ? this.REFERENCE : 
                this.inputIndex === 3 ? this.AMOUNT : 
                this.PHONE_NUMBER;
    }
    // --------------------------------------------------
    toJson() {
        return {
            phoneNumber: this.phoneNumber.toJson(),
            reference: this.reference.toJson(),
            amount: this.amount.toJson(),
        }
    }
}