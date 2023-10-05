export function findOddInt(numberArr: number[]): number {
    const numCount: { [key: string]: number } = {};

    for (const num of numberArr) {
        if (!numCount[num.toString()]) numCount[num.toString()] = 0;
        numCount[num.toString()]++;
    }

    for (const key in numCount) {
        const timesAppeared = numCount[key];
        if ((timesAppeared % 2) != 0) return parseInt(key);
    }

    throw Error('No numbers appeared for an odd number of times');
}