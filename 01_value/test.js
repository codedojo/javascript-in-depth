const value = require('./index');

describe('value', () => {
    test('возращает передаваемое ей значение', () => {
        expect(value(42)).toBe(42);
    });
});