"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOddInt = void 0;
function findOddInt(input) {
    const numCount = {};
    for (const num of input) {
        if (!numCount[num.toString()])
            numCount[num.toString()] = 0;
        numCount[num.toString()]++;
    }
    for (const key in numCount) {
        const timesAppeared = numCount[key];
        if ((timesAppeared % 2) != 0)
            return parseInt(key);
    }
    throw Error('No numbers appeared for an odd number of times');
}
exports.findOddInt = findOddInt;
