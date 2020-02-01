export default class ControlModel {
    numberRegex = /[0-9]/
    value = '';
    valid = false;
    validator;
    notifyObservers
    // --------------------------------------------------
    constructor(validator) {
        this.validator = validator;
    }
    // -----------------------------------------------------
    validateNumber(key) {
        return this.numberRegex.test(key)
    }
    // --------------------------------------------------
    addChar(char, onSuccess) {
        if (this.validateNumber(char) && !this.validator.test(this.value)) {
            this.value = this.value.concat(char)
            onSuccess()
        }
    }
    // --------------------------------------------------
    removeChar(onSuccess) {
        const l = this.length;
        if (l > 0) {
            this.value = this.value.substr(0, l - 1)
            onSuccess()
        }
    }
    // --------------------------------------------------
    get length () {
        return this.value.length
    }
    // --------------------------------------------------
    toJson() {
        return {
            value: this.value,
            valid: this.validator.test(this.value)
        }
    }
    // --------------------------------------------------
}