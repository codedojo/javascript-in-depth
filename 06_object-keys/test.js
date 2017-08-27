const keys = require('./index');

describe('Object.keys', () => {
    test('`keys` является массивом содержащим названия свойств объекта', () => {
        expect(propertyNames).toMatchObject(expect.arrayContaining(['title', 'completed']));
    });
});