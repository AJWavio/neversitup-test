import { countSmileys } from "./count-smileys"

test('Empty array should return 0', () => {
    expect(countSmileys([])).toBe(0);
})

test('Should return 0 if array contain no valid face', () => {
    expect(countSmileys([';(', ':>', ':}', ':]'])).toBe(0);
});

test('Should return amount of valid smiley face', () => {
    expect(countSmileys([':)', ';(', ';}', ':-D'])).toBe(2);
    expect(countSmileys([';D', ':-(', ':-)', ';~)'])).toBe(3);
    expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toBe(1);
})