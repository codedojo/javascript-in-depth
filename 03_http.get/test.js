const http = require('./solution');

describe('http.get', () => {
    test('возвращает обещание', () => {
        expect(http.get('https://jsonplaceholder.typicode.com/users/1')).toBeInstanceOf(Promise);
    });

    test('возращает запрашиваемый ресурс', () => {
        return expect(http.get('https://jsonplaceholder.typicode.com/users/1')).resolves.toHaveProperty('id');
    });

    test('возращает ошибку в случае неудачи', () => {
        return expect(http.get('https://jsonplaceholder.typicode.com/user/1')).rejects.toBeInstanceOf(Error);
    });
});