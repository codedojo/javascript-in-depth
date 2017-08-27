const { Character, richard, robert } = require('./index');

describe('Прототип функции', () => {
    test('`Character`, `robert` и `richard` объявлен', () => {
        expect(Character).toBeDefined();
        expect(robert).toBeDefined();
        expect(richard).toBeDefined();
    });

    test('`Character` является функцией', () => {
        expect(Character).toBeInstanceOf(Function);
    });

    test('`robert` и `richard` является экземплярами `Character`', () => {
        expect(robert).toBeInstanceOf(Character);
        expect(richard).toBeInstanceOf(Character);
    });

    test('`hp` у `robert` 75', () => {
        expect(robert.hp).toBe(75);
    });

    test('`robert` и `richard` имеют доступ к свойству `inventory`', () => {
        expect(robert.inventory).toBeDefined();
        expect(richard.inventory).toBeDefined();

        expect(robert.hasOwnProperty('inventory')).toBe(false);
        expect(richard.hasOwnProperty('inventory')).toBe(false);
    });

    test('`robert` и `richard` имеют предмет в инвентаре', () => {
        expect(robert.inventory).toHaveLength(1);
        expect(richard.inventory).toHaveLength(1);
    });
});