import { indentStr } from './indentString';

describe('indentStr', () => {
    it('throws error if str arg is not a string', () => {
        expect(() => indentStr(2 as unknown as string, 0)).toThrow();
    });

    it('throws error if count arg is not a number', () => {
        expect(() => indentStr('', [] as unknown as number)).toThrow();
    });

    it('throws error if count arg is negative', () => {
        expect(() => indentStr('', -1)).toThrow();
    });

    it('throws error if params arg is not an object', () => {
        expect(() => indentStr('', -1)).toThrow();
    });

    it('indents string with spaces by default', () => {
        expect(indentStr('a', 4)).toBe('    a');
    });

    it('indents with custom characters', () => {
        expect(indentStr('a', 2, '*')).toBe('**a');
    });

    it('removes extra indent', () => {
        expect(indentStr('  \ta', 0)).toBe('a');
    });

    it('removes extra indent & adds needed', () => {
        expect(indentStr('  \ta', 2)).toBe('  a');
    });

    it('not indents empty lines by default', () => {
        expect(indentStr('  \na', 0)).toBe('\na');
    });

    it('indents empty lines if configured', () => {
        expect(indentStr('  \na', 2, '*', { indentEmptyLines: true })).toBe('**\n**a');
    });

    it('indents lines relative if configured', () => {
        expect(indentStr('{\n  a: 1,\n  b: 2\n}', 2, '*', { relativeIndent: true })).toBe('**{\n****a: 1,\n****b: 2\n**}');
    });
});