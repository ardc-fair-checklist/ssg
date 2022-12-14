import { describe } from 'vitest';
import { expect } from 'vitest';
import { test } from 'vitest';
import Ajv from 'ajv';
import schema from './schema.json';
import { questions, version } from './questions.json';

const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}

const validate = ajv.compile(schema);

describe('the data questions data', () => {
    test('should validate against the schema', () => {
        const valid = validate({ questions, version });
        expect(valid).toBe(true);
    });

    test('each answer set should have at least one zero-points option', () => {
        const scoresIncludeZero = questions.map(q => q.answers.map(a => a.score).includes(0));
        expect(scoresIncludeZero.every(elem => elem === true)).toBe(true);
    });

    test('each answer set should have the answers in increasing order of points', () => {
        const isIncreasing = (arr: number[]) => {
            const f = (v:number, i:number) => i === 0 || v >= arr[i - 1];
            return arr.every(f);
        };
        const scoreArrays = questions.map(q => q.answers.map(a => a.score));
        expect(scoreArrays
            .map(scoreArray => isIncreasing(scoreArray))
            .every(elem => elem)).toBe(true);
    });

    test('the questions should be ordered by principle and appear in FAIR order', () => {
        const stringified = questions.map(q => q.principle).join('');
        const re = /^f+a+i+r+$/;
        expect(re.test(stringified)).toBe(true);
    });

    test('there should be 4 questions with principle \'f\'', () => {
        expect(questions.filter(q => q.principle === 'f').length).toBe(4);
    });

    test('there should be 3 questions with principle \'a\'', () => {
        expect(questions.filter(q => q.principle === 'a').length).toBe(3);
    });

    test('there should be 3 questions with principle \'i\'', () => {
        expect(questions.filter(q => q.principle === 'i').length).toBe(3);
    });

    test('there should be 2 questions with principle \'r\'', () => {
        expect(questions.filter(q => q.principle === 'r').length).toBe(2);
    });

    test('there should be 12 questions in total', () => {
        expect(questions.length).toBe(12);
    });
});
