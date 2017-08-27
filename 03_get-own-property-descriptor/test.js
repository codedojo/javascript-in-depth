const propertyDescriptor = require('./index');

describe('Object.getOwnPropertyDescriptor', () => {
    test('`propertyDescriptor` описывает свойство `title`', () => {
        expect(propertyDescriptor).toMatchObject({
            value: 'Разобраться с методами конфигурациии объекта',
            writable: true,
            enumerable: true,
            configurable: true
        });
    });
});