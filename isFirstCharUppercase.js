const isFirstCharUppercase = checkedString => {
    if (typeof checkedString === 'string' && !!checkedString) {
        const firstChar = checkedString[0];
        return firstChar === firstChar.toUpperCase();
    }

    if (checkedString === undefined) {
        throw new Error('First argument is neccessary');
    }

    throw new Error('Input is not a string or is an empty string');
}

export default isFirstCharUppercase;
