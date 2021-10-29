const isStringWithValue = checkedValue => (typeof checkedValue === 'string' || checkedValue instanceof String) && !!checkedValue;

module.exports = isStringWithValue;
