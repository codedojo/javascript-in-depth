const { Character, Warrior } = require('./solution');

describe('this', () => {
    test('`Character` объявлен', () => {
        expect(Character).toBeDefined()
    });

    test('`Character` является функцией', () => {
        expect(Character).toBeInstanceOf(Function)
    });

    test('`Character` при вызове с помощью `new` возвращает экземпляр Character`', () => {
        let character = new Character();

        expect(character).toBeInstanceOf(Character);
    });

    test('`Character` при вызове без `new` возвращает глобальный объект', () => {
        expect(Character()).toEqual(global)
    });

    test('`Warrior` объявлен', () => {
        expect(Warrior).toBeDefined()
    });

    test('`Warrior` является функцией', () => {
        expect(Warrior).toBeInstanceOf(Function)
    });

    test('`Warrior` при вызове с помощью `new` возвращает пустой объект', () => {
        let warrior = new Warrior();

        expect(warrior).not.toBeInstanceOf(Warrior);
    });

    test('`Warrior` при вызове без `new` возвращает пустой объект', () => {
        expect(Warrior()).not.toEqual(global)
    });
});