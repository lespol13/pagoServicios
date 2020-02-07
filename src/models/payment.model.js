
import Control from  './control.model';

export default class PaymentModel {
    phoneNumber = new Control('Número Telefonico', /[0-9]{10}/, 1);
    reference = new Control('Referencia', /[0-9]{12}/, 2);
    amount = new Control('Monto', /[0-9]{7}/, 3);
    inputIndex = 1;
    listeners = [];
    constructor() {
        this.reference.subscribe((reference) => {
            if (reference.valid) {
                this.setInputIndex(3)
            }
        })
    }
    // -----------------------------------------------------------
    subscribe(listener) {
        this.listeners.push(listener)
    }
    // -----------------------------------------------------------
    unsubscribe() {
        this.listeners = []
    }
    // -----------------------------------------------------------
    notifyLIsteners() {
        this.listeners.forEach(listener => listener())
    }
    // -----------------------------------------------------------
    addCharToProperty(key) {
        const control = this.currentControl
        this[control].addChar(key);
    }
    // -----------------------------------------------------------
    removeCharToProperty() {
        const control = this.currentControl
        this[control].removeChar();
    }
    // -----------------------------------------------------------
    setInputIndex(value) {
        this.inputIndex = value;
        this.notifyLIsteners();
    }
    // -----------------------------------------------------------
    get currentControl() {
        return Object.keys(this).find(key => {
            return (this[key] instanceof Control && this[key].index === this.inputIndex) 
        })
    }
    // -----------------------------------------------------------
    toJson() {
        return {
            phoneNumber: this.phoneNumber.toJson(),
            reference: this.reference.toJson(),
            amount: this.amount.toJson(),
        }
    }
}