const todo = require('./index');

describe('Object.defineProperties', () => {
    test('У объекта `todo` имеются сконфигурируемое свойства `title` и `completed`', () => {
        let actual = Object.getOwnPropertyDescriptors(todo);
        let expected = {
            title: {
                value: 'Разобраться с методами конфигурациии объекта',
                writable: true,
                enumerable: true,
                configurable: false
            },
            completed: {
                value: true,
                writable: true,
                enumerable: true,
                configurable: false
            }
        };

        expect(actual).toMatchObject(expected);
    });
});