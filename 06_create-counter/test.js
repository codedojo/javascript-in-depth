const createCounter = require('./index');

describe('createCounter', () => {
    test('возращает функцию', () => {
        expect(createCounter()).toBeInstanceOf(Function);
    });

    test('использует значения по умолчанию, если аргументы не переданы', () => {
        let count = createCounter();

        assert.equal(count(), 1);
    });

    test('возращаемая функция ведет счет исходя из переданных аргументов', () => {
        let count = createCounter(0, 10);

        assert.equal(count(), 10);
    });
});