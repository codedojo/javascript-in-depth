const todo = require('./index');

describe('Object.defineProperty', () => {
    test('У объекта `todo` имеется сконфигурируемое свойство `title`', () => {
        let actual = Object.getOwnPropertyDescriptor(todo, 'title');
        let expected = {
            value: 'Разобраться с методами конфигурациии объекта',
            writable: true,
            enumerable: true,
            configurable: false
        };

        expect(actual).toMatchObject(expected);
    });
});