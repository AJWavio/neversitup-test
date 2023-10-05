function recursivePermutation(prefix: string, remaining: string): string[] {
    const permutationsSet: Set<string> = new Set();

    if (!remaining) {
        permutationsSet.add(prefix);
    }

    for (let i = 0; i < remaining.length; i++) {
        const newPrefix = prefix + remaining[i];
        const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
        const subPermutationsArr = recursivePermutation(newPrefix, newRemaining);
        subPermutationsArr.forEach(permutationsSet.add, permutationsSet);
    }

    return Array.from(permutationsSet);
}

export function findPermutation(inputStr: string): string[] {
    return recursivePermutation('', inputStr);
}