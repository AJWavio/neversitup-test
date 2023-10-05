import { getCountSmileys } from "./count-smileys/count-smileys";
import { findOddInt } from "./find-odd/find-odd";
import { findPermutation } from "./permutation/permutation";

console.log('\n---- Permutation ----\n')
console.log('permutation(\'a\'):', findPermutation('a'));
console.log('permutation(\'ab\'):', findPermutation('ab'));
console.log('permutation(\'abc\'):', findPermutation('abc'));
console.log('permutation(\'aabb\'):', findPermutation('aabb'));

console.log('\n---- Find Odd Int ----\n')
console.log('findOddInt([7]):', findOddInt([7]));
console.log('findOddInt([0]):', findOddInt([0]));
console.log('findOddInt([1,1,2]):', findOddInt([1,1,2]));
console.log('findOddInt([0,1,0,1,0]):', findOddInt([0,1,0,1,0]));

console.log('\n---- Count Smiley Face ----\n')
console.log('countSmileys([\':)\', \';(\', \';}\', \':-D\']):', getCountSmileys([':)', ';(', ';}', ':-D']));
console.log('countSmileys([\';D\', \':-(\', \':-)\', \';~)\']):', getCountSmileys([';D', ':-(', ':-)', ';~)']));
console.log('countSmileys([\';]\', \':[\', \';*\', \':$\', \';-D\']):', getCountSmileys([';]', ':[', ';*', ':$', ';-D']));