// import { classNames } from './classNames';

import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass', {}, [])).toBe('someClass');
    });

    test('with additional param', () => {
        const expected = 'someClass additionalParam';
        expect(classNames('someClass', {}, ['additionalParam'])).toBe(expected);
    });

    test('with mode param', () => {
        const expected = 'someClass additionalParam class1 class2';
        expect(
            classNames(
                'someClass',
                { class1: true, class2: true },
                ['additionalParam'],
            ),
        ).toBe(expected);
    });

    test('with mode param, one is false', () => {
        const expected = 'someClass additionalParam class1';
        expect(
            classNames(
                'someClass',
                { class1: true, class2: false },
                ['additionalParam'],
            ),
        ).toBe(expected);
    });

    test('with mode param, one is undefined', () => {
        const expected = 'someClass additionalParam class1';
        expect(
            classNames(
                'someClass',
                { class1: true, class2: undefined },
                ['additionalParam'],
            ),
        ).toBe(expected);
    });
});
