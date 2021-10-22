const { errors: { NOT_OR_WRONG_VALUE } } = require('../helpers');
const isStringWithValue = require('./isStringWithValue');

const isFirstCharUppercase = checkedValue => {
    if (!isStringWithValue(checkedValue)) {
        throw new Error(NOT_OR_WRONG_VALUE);
    }

    const firstChar = checkedValue[0];
    return firstChar === firstChar.toUpperCase();    
}

module.exports = isFirstCharUppercase;
