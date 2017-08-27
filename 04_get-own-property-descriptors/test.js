const propertyDescriptor = require('./index');

describe('Object.getOwnPropertyDescriptors', () => {
    test('`propertyDescriptors` описывает свойства `title` и `completed`', () => {
        expect(propertyDescriptors).toMatchObject({
            title: {
                value: 'Разобраться с методами конфигурациии объекта',
                writable: true,
                enumerable: true,
                configurable: true
            },
            completed: {
                value: true,
                writable: true,
                enumerable: true,
                configurable: true
            }
        });
    });
});