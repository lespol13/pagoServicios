export default class ControlModel {
    numberRegex = /[0-9]/
    name
    value = ''
    validator
    index
    listeners = []
    // --------------------------------------------------
    constructor(name, validator, index) {
        this.name = name
        this.validator = validator
        this.index = index
    }
    // --------------------------------------------------
    subscribe(callback) {
        this.listeners.push(callback)
    }
    // --------------------------------------------------
    unsubscribe() {
        // console.log('unsubscribe', this.name)
        this.listeners = []
    }
    // --------------------------------------------------
    notifyListeners() {
        this.listeners.forEach(listener => listener(this))
    }
    // --------------------------------------------------
    addChar(char) {
        if (this.numberRegex.test(char) && !this.validator.test(this.value)) {
            this.value = this.value.concat(char)
            this.notifyListeners()
        }
    }
    // --------------------------------------------------
    removeChar() {
        const l = this.length;
        if (l > 0) {
            this.value = this.value.substr(0, l - 1)
            this.notifyListeners()
        }
    }
    // --------------------------------------------------
    get length () {
        return this.value.length
    }
    // --------------------------------------------------
    get valid() {
        return this.validator.test(this.value)
    }
    // --------------------------------------------------
    toJson() {
        return {
            value: this.value,
            valid: this.valid
        }
    }
    // --------------------------------------------------
    reset() {
        this.value = ''
    }
}