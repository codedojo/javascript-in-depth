const wait = require('./solution');

describe('wait', () => {
    test('возращает обещание', () => {
        expect(wait(1000)).toBeInstanceOf(Promise);
    });

    test('обещание выполняется через определенное время', () => {
        return wait(1000);
    });
});