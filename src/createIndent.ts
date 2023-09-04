export function createIndent(charactersCount: number, character = ' '): string {
    if (typeof charactersCount !== 'number') {
        throw new Error('charactersCount must be a number'!);
    }

    if (charactersCount < 0) {
        throw new Error('charactersCount can\'t be negative!');
    }

    if (typeof character !== 'string') {
        throw new Error('characters must be a string!');
    }

    let str = '';

    for (let i = 0; i < charactersCount; i++) {
        str += character;
    }

    return str;
}