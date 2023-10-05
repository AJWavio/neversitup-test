import { getCountSmileys } from "./count-smileys"

test('Empty array should return 0', () => {
    expect(getCountSmileys([])).toBe(0);
})

test('Should return 0 if array contain no valid face', () => {
    expect(getCountSmileys([';(', ':>', ':}', ':]'])).toBe(0);
});

test('Should return amount of valid smiley face', () => {
    expect(getCountSmileys([':)', ';(', ';}', ':-D'])).toBe(2);
    expect(getCountSmileys([';D', ':-(', ':-)', ';~)'])).toBe(3);
    expect(getCountSmileys([';]', ':[', ';*', ':$', ';-D'])).toBe(1);
})