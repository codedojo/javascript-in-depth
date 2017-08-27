const Character = require('./index');

describe('Создать объект Chatacter, создающий другие объекты', () => {
    test('`Character` объявлен', () => {
        expect(Character).toBeDefined();
    });

    test('`Character` является объектом', () => {
        expect(Character).toBeInstanceOf(Object);
    });

    test('`Character.new` возвращать новый объект, прототипом которого является `Character', () => {
        let character = Character.new();

        expect(Character.isPrototypeOf(character)).toBe(true);
    });
});