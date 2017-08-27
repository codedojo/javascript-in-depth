const { character } = require('./index');

describe('Создать простой объект', () => {
    test('Объект объявлен', () => {
        expect(character).toBeDefined();
    });

    test('У объекта есть необходимые свойства', () => {
        expect(character).toMatchObject({ name: 'Benedict', hp: 100 });
    });
});