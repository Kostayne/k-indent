import { createIndent } from './createIndent';

interface IndentStringParams {
    indentEmptyLines?: boolean;
    relativeIndent?: boolean;
}

const defaultParams: Required<IndentStringParams> = {
    indentEmptyLines: false,
    relativeIndent: false,
};

const validateArgs = (str: string, count: number, character: string, params: IndentStringParams) => {
    if (typeof str !== 'string') {
        throw new Error('str must be type of string!');
    }

    if (typeof count !== 'number') {
        throw new Error('count must be a number!');
    }

    if (count < 0) {
        throw new Error('count can not be negative!');
    }

    if (typeof character !== 'string') {
        throw new Error('character must be a string!');
    }

    if (typeof params !== 'object') {
        throw new Error('params must be an object!');
    }

    if (Array.isArray(params)) {
        throw new Error('params must be an object, not');
    }
};

const getResultParams = (params?: IndentStringParams): Required<IndentStringParams> => {
    if (!params) {
        return defaultParams;
    }

    return { ...defaultParams, ...params };
};

export function indentStr(str: string, count: number, character = ' ', params: IndentStringParams = defaultParams): string {
    const resParams = getResultParams(params);
    validateArgs(str, count, character, params);

    return str.split('\n')
        .map(line => {
            const trimmedLine = line.trimStart();

            // don't indent empty lines
            if (trimmedLine === '' && !resParams.indentEmptyLines) {
                return '';
            }

            let relativeIndent = 0;

            if (resParams.relativeIndent) {
                relativeIndent = line.length - trimmedLine.length;
            }

            return createIndent(count + relativeIndent, character) + trimmedLine; 
        })
        .join('\n');
}