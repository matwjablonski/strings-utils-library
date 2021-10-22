import { isFirstCharUppercase } from "..";
import { errors } from '../helpers'

const { NOT_OR_WRONG_VALUE } = errors;

describe('isFirstCharUppercase', () => {
    test('should return false when first letter is lowercase', () => {
        expect(isFirstCharUppercase('lorem ipsum')).toBe(false);
    });

    test('should return true when first letter is lowercase', () => {
        expect(isFirstCharUppercase('Lorem ipsum')).toBe(true);
    });

    test('should return an error when passed string is an empty string', () => {
        expect(() => isFirstCharUppercase('')).toThrowError(NOT_OR_WRONG_VALUE);
    });

    test('should return an error when passed number instead of string', () => {
        expect(() => isFirstCharUppercase(123)).toThrowError(NOT_OR_WRONG_VALUE);
    });

    test('should return an error when passed object instead of string', () => {
        expect(() => isFirstCharUppercase({})).toThrowError(NOT_OR_WRONG_VALUE);
    });

    test('should return an error when passed array instead of string', () => {
        expect(() => isFirstCharUppercase([])).toThrowError(NOT_OR_WRONG_VALUE);
    });

    test('should return an error when passed null instead of string', () => {
        expect(() => isFirstCharUppercase(null)).toThrowError(NOT_OR_WRONG_VALUE);
    });

    test('should return an error when function was called without any arguments', () => {
        expect(() => isFirstCharUppercase()).toThrowError(NOT_OR_WRONG_VALUE);
    });
});