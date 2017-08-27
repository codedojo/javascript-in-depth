const { character, warrior, knight } = require('./index');

describe('Связать объекты с помощью свойства `__proto__`', () => {
    describe('`character`', () => {
        test('`character` объявлен', () => {
            expect(character).toBeDefined();
        });

        test('`character` является прототипом `warrior`', () => {
            expect(character.isPrototypeOf(warrior)).toBe(true);
        });

        test('`character` является прототипом `knight`', () => {
            expect(character.isPrototypeOf(knight)).toBe(true);
        });
    });
    
    describe('`warrior`', () => {
        test('`warrior` объявлен', () => {
            expect(warrior).toBeDefined();
        });

        test('`warrior` является прототипом `knight`', () => {
            expect(warrior.isPrototypeOf(knight)).toBe(true);
        });
    });
    
    describe('`knight`', () => {
        test('`knight` объявлен', () => {
            expect(knight).toBeDefined();
        });

        test('`knight` имеет доступ к свойствам прототипов', () => {
            expect(knight.name).toBe('Benedict');
            expect(knight.hp).toBe(100);
            expect(knight.weapon).toBe('Sword');
        });
    });
});