const add = require('./index');

describe('add', () => {
    test('возвращает функцию', () => {
        expect(add()).toBeInstanceOf(Function);
    });

    test('складывает с помощью двух вызовов', () => {
        expect(add(3)(4)).toBe(7);
    });
});