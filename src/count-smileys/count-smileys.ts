export function getCountSmileys(faceArr: string[]): number {
    const smileyRegEx = /([:;]){1}([-~]){0,1}([\)D]){1}/;
    let matchCount = 0;

    for (const face of faceArr) {
        if (smileyRegEx.test(face)) matchCount++;
    }

    return matchCount;
}