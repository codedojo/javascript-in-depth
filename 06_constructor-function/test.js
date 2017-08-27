const { Character, character } = require('./index');

describe('Вызов функции как конструктора', () => {
    test('`Character` объявлен', () => {
        expect(Character).toBeDefined();
    });

    test('`Character` является функцией', () => {
        expect(Character).toBeInstanceOf(Function);
    });

    test('`Character` создает новый объект персонажа', () => {
        let character = new Character('Benedict');

        expect(character).toBeInstanceOf(Character);
        expect(character).toMatchObject({ name: 'Benedict', hp: 100 });
    });

    test('`character` объявлен', () => {
        expect(character).toBeDefined();
    });

    test('`character` является экземпляром Character', () => {
        expect(character).toBeInstanceOf(Character);
    });

    test('`character` имеет необходимые свойства', () => {
        expect(character).toHaveProperty('name');
        expect(character.name).toEqual(expect.any(String));

        expect(character).toHaveProperty('hp');
        expect(character.hp).toEqual(expect.any(Number));
    });
});
