function recursivePermutation(prefix: string, remaining: string): string[] {
    const permutations: Set<string> = new Set();

    if (!remaining) {
        permutations.add(prefix);
    }

    for (let i = 0; i < remaining.length; i++) {
        const newPrefix = prefix + remaining[i];
        const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
        const subPermutations = recursivePermutation(newPrefix, newRemaining);
        subPermutations.forEach(permutations.add, permutations);
    }

    return Array.from(permutations);
}

export function permutation(inputStr: string): string[] {
    return recursivePermutation('', inputStr);
}