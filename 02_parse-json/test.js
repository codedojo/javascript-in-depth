const parseJSON = require('./solution');

describe('parseJSON', () => {
    test('возвращает обещание', () => {
        expect(parseJSON('{}')).toBeInstanceOf(Promise);
    });

    test('конвертирует JSON-текст в JS-объект', () => {
        return expect(parseJSON('{ "answer": 42 }')).resolves.toMatchObject({ answer: 42 });
    });

    test('возвращает ошибку если не удалось конвертировать', () => {
        return expect(parseJSON('!')).rejects.toBeInstanceOf(SyntaxError);
    });
});