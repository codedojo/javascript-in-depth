const protect = require('./index');

describe('protect', () => {
    test('возращает функцию', () => {
        expect(protect(42, '123456')).toBeInstanceOf(Function);
    });

    test('защищает вызов функции паролем', () => {
        let safe = protect(42, '123456');

        expect(safe('123456')).toBe(42);
        expect(safe()).toBeUndefined();
    });
});