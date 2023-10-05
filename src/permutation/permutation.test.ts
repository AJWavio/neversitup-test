import { permutation } from "./permutation"

test('Should return array containing 1 empty string if input is empty string', () => {
    expect(permutation('')).toBeInstanceOf(Array);
    expect(permutation('').length).toBe(1);
    expect(permutation('')).toEqual((expect.arrayContaining([''])));
})

test('Result array should be array containing the given 1 character string', () => {
    expect(permutation('b')).toEqual((expect.arrayContaining(['b'])));
})

test('Result array should only contain 1 element if there is only 1 permutation possible', () => {
    expect(permutation('aaaa')).toBeInstanceOf(Array);
    expect(permutation('aaaa').length).toBe(1);
    expect(permutation('aaaa')).toEqual((expect.arrayContaining(['aaaa'])));
})

test('Should return valid result', () => {
    expect(permutation('ab').sort()).toEqual(expect.arrayContaining(['ab', 'ba'].sort()));
    expect(permutation('abc').sort()).toEqual(expect.arrayContaining(['abc','acb','bac','bca','cab','cba'].sort()));
    expect(permutation('aabb').sort()).toEqual(expect.arrayContaining(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort()));
})