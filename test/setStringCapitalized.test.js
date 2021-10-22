import { setStringCapitalized } from "..";
import { errors } from '../helpers'

const { NOT_OR_WRONG_VALUE } = errors;

describe('c', () => {
    test('should return an error when function was called without any arguments', () => {
        expect(() => setStringCapitalized()).toThrowError(NOT_OR_WRONG_VALUE);
    });

    test('should return "Lorem Ipsum" when passed "lorem ipsum"', () => {
        expect(setStringCapitalized('lorem ipsum')).toBe('Lorem Ipsum');
    });

    test('should return "Lorem Ipsum" when passed "lorem        ipsum"', () => {
        expect(setStringCapitalized('lorem        ipsum')).toBe('Lorem Ipsum');
    });

    test('should return "123 Abc" when passed "123 abc"', () => {
        expect(setStringCapitalized('123 abc')).toBe('123 Abc');
    });
});