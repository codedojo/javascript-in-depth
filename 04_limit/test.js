const limit = require('./index');

describe('limit', () => {
    test('возращает функцию', () => {
        expect(limit()).toBeInstanceOf(Function);
    });

    test('ограничивает количество вызовов функции', () => {
        let limited = limit(() => 42, 2);

        expect(limited()).toBe(42);
        expect(limited()).toBe(42);
        expect(limited()).toBe(false);
    });
});