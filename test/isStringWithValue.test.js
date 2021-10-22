import { isStringWithValue } from "..";

describe('isStringWithValue', () => {
    test('should return true when passed string', () => {
        expect(isStringWithValue('Lorem ipsum')).toBe(true);
    });

    test('should return false when passed empty string', () => {
        expect(isStringWithValue('')).toBe(false);
    });

    test('should return false when passed array', () => {
        expect(isStringWithValue([])).toBe(false);
    });

    test('should return false when passed object', () => {
        expect(isStringWithValue({})).toBe(false);
    });

    test('should return false when passed number', () => {
        expect(isStringWithValue(123)).toBe(false);
    });

    test('should return false when passed undefined or not passed any value', () => {
        expect(isStringWithValue()).toBe(false);
        expect(isStringWithValue(undefined)).toBe(false);
    });

    test('should return false when passed null', () => {
        expect(isStringWithValue(null)).toBe(false);
    });
});
