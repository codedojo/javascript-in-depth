describe('Функции:', () => {
    [
        'simple-objects',
        'proto',
        'prototype-chain',
        'object-create',
        'dot-new',
        'constructor-function',
        'this',
        'function-prototype',
        'prototypal-inheritance'
    ].forEach((filename, index) => {
        let exercise = require(`./${filename}`);

        describe(`Упражнение ${index + 1}: ${exercise.title}`, () => {
            let solution;

            beforeEach(() => solution = require(`../exercises/${filename}`));

            exercise.tests.forEach(({ description, assertion, async }) => {
                if (async) {
                    it(description, done => assertion(solution, done));
                } else {
                    it(description, () => assertion(solution));
                }
            });
        });
    });
});