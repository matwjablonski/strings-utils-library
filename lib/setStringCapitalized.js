const { errors: { NOT_OR_WRONG_VALUE } } = require('../helpers');
const isStringWithValue = require('./isStringWithValue');

const setStringCapitalize = checkedValue => {
    if (!isStringWithValue(checkedValue)) {
        throw new Error(NOT_OR_WRONG_VALUE);
    }

    const wordArray = checkedValue.split(' ');
    
    return wordArray
        .filter(word => !!word)
        .map(word => {
            const [firstChar, ...rest] = word;
            const capitalizeFirstChar = firstChar.toUpperCase();
            return capitalizeFirstChar + rest.join('');
        })
        .join(' ');
}

module.exports = setStringCapitalize;