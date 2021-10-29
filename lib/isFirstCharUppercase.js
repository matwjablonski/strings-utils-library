const { errors: { NOT_OR_WRONG_VALUE } } = require('../helpers');

const isFirstCharUppercase = checkedValue => {
    if (typeof checkedValue === 'string' && !!checkedValue) {
        const firstChar = checkedValue[0];

        return firstChar === firstChar.toUpperCase();
    }

    if (checkedValue instanceof String && !!checkedValue.valueOf()) {
        const firstChar = checkedValue.valueOf()[0];
        return firstChar === firstChar.toUpperCase();   
    }

    throw new Error(NOT_OR_WRONG_VALUE);  
}

module.exports = isFirstCharUppercase;
