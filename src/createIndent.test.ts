import { createIndent } from './createIndent';

describe('createIdent', () => {
    it('Throws error if charactersCount is not a number', () => {
        expect(() => createIndent('a' as unknown as number)).toThrow();
    });

    it('Throws error if charactersCount is negative', () => {
        expect(() => createIndent(-1)).toThrow();
    });

    it('Throws error if character is not a string', () => {
        expect(() => createIndent(0, 2 as unknown as string)).toThrow();
    });

    it('Correctly creates 4 spaces (no character provided)', () => {
        expect(createIndent(4)).toBe('    ');
    });

    it('Correctly creates 2 stars as indent (* character provided)', () => {
        expect(createIndent(2, '*')).toBe('**');
    });
});