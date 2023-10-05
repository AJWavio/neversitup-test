import { findPermutation } from "./permutation"

test('Should return array containing 1 empty string if input is empty string', () => {
    expect(findPermutation('')).toBeInstanceOf(Array);
    expect(findPermutation('').length).toBe(1);
    expect(findPermutation('')).toEqual((expect.arrayContaining([''])));
})

test('Result array should be array containing the given 1 character string', () => {
    expect(findPermutation('b')).toEqual((expect.arrayContaining(['b'])));
})

test('Result array should only contain 1 element if there is only 1 permutation possible', () => {
    expect(findPermutation('aaaa')).toBeInstanceOf(Array);
    expect(findPermutation('aaaa').length).toBe(1);
    expect(findPermutation('aaaa')).toEqual((expect.arrayContaining(['aaaa'])));
})

test('Should return valid result', () => {
    expect(findPermutation('ab').sort()).toEqual(expect.arrayContaining(['ab', 'ba'].sort()));
    expect(findPermutation('abc').sort()).toEqual(expect.arrayContaining(['abc','acb','bac','bca','cab','cba'].sort()));
    expect(findPermutation('aabb').sort()).toEqual(expect.arrayContaining(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort()));
})