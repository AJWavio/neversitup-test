export function countSmileys(faceList: string[]): number {
    const smileyRegEx = /([:;]){1}([-~]){0,1}([\)D]){1}/;
    let matchCount = 0;

    for (const face of faceList) {
        if (smileyRegEx.test(face)) matchCount++;
        else console.log(face)
    }

    return matchCount;
}