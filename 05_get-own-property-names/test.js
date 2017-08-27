const propertyDescriptor = require('./index');

describe('Object.getOwnPropertyNames', () => {
    test('`propertyNames` является массивом содержащим названия всех свойств объекта', () => {
        expect(propertyNames).toMatchObject(expect.arrayContaining(['title', 'completed']));
    });
});