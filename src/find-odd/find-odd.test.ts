import { findOddInt } from "./find-odd"

test('Empty array should throw error', () => {
    expect(() => findOddInt([])).toThrow();
})

test('If no numbers appear for an odd number of times, function should throw error', () => {
    expect(() => findOddInt([1, 1, 2, 2, 3, 3])).toThrow();
})

test('Should return valid result for correct input', () => {
    expect(findOddInt([7])).toBe(7);
    expect(findOddInt([0])).toBe(0);
    expect(findOddInt([1, 1, 2])).toBe(2);
    expect(findOddInt([0, 1, 0, 1, 0])).toBe(0);
    expect(findOddInt([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])).toBe(4);
})