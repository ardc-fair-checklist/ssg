import { describe } from 'vitest';
import { expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { test } from 'vitest';
import ChecklistAnswer from './ChecklistAnswer.vue';

describe('after mounting an Answer component', () => {
    const props = {
        answer: {
            id: 'answer0',
            score: 0,
            text: 'answer0 text'
        },
        isChecked: true,
        onClick: () => undefined
    };

    const wrapper = mount(ChecklistAnswer, { props });

    test('it has a property named answer', () => {
        expect(wrapper.props('answer')).toBeDefined();
        expect(wrapper.props('answer')).toBeTypeOf('object');
    });

    test('it has the correct answer id', () => {
        expect(wrapper.props('answer').id).toBeDefined();
        expect(wrapper.props('answer').id).toBe(props.answer.id);
    });

    test('it has the correct answer score', () => {
        expect(wrapper.props('answer').score).toBeDefined();
        expect(wrapper.props('answer').score).toBe(props.answer.score);
    });

    test('it has the correct answer text', () => {
        expect(wrapper.props('answer').text).toBeDefined();
        expect(wrapper.props('answer').text).toBe(props.answer.text);
    });

    test('it has the correct isChecked value', () => {
        expect(wrapper.props('isChecked')).toBeDefined();
        expect(wrapper.props('isChecked')).toBe(props.isChecked);
    });

    test('it has the correct onClick method', () => {
        expect(wrapper.props('onClick')).toBeDefined();
        expect(wrapper.props('onClick')).toBe(props.onClick);
    });
});
