const { character, warrior, knight } = require('./index');

describe('Создать объекты с помощью `Object.create`', () => {
    test('`character`, `warrior`, `knight` объявлены', () => {
        expect(character).toBeDefined();
        expect(warrior).toBeDefined();
        expect(knight).toBeDefined();
    });

    test('`character` является прототипом `warrior`', () => {
        expect(character.isPrototypeOf(warrior)).toBe(true);
    });

    test('`warrior` является прототипом `knight`', () => {
        expect(warrior.isPrototypeOf(knight)).toBe(true);
    });

    test('`character` является прототипом `knight`', () => {
        expect(character.isPrototypeOf(knight)).toBe(true);
    });
});