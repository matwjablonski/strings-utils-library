import { isFirstCharUppercase } from "..";

describe('isFirstCharUppercase', () => {
    test('should return false when first letter is lowercase', () => {
        expect(isFirstCharUppercase('lorem ipsum')).toBe(false);
    });

    test('should return true when first letter is lowercase', () => {
        expect(isFirstCharUppercase('Lorem ipsum')).toBe(true);
    });

    test('should return an error when passed string is an empty string', () => {
        expect(() => isFirstCharUppercase('')).toThrowError('Input is not a string or is an empty string');
    });

    test('should return an error when passed number instead of string', () => {
        expect(() => isFirstCharUppercase(123)).toThrowError('Input is not a string or is an empty string');
    });

    test('should return an error when passed object instead of string', () => {
        expect(() => isFirstCharUppercase({})).toThrowError('Input is not a string or is an empty string');
    });

    test('should return an error when function was called without any arguments', () => {
        expect(() => isFirstCharUppercase()).toThrowError('First argument is neccessary');
    });
});