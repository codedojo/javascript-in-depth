const { Character, Warrior, Knight } = require('./index');

describe('Прототипное наследование', () => {
    describe('`Character`', () => {
        test('`Character` объявлен', () => {
            expect(Character).toBeDefined();
        });

        test('`Character` являются функцией', () => {
            expect(Character).toBeInstanceOf(Function);
        });

        test('`Character` создает персонажа', () => {
            let character = new Character('Benedict');

            expect(character.name).toBe('Benedict');
            expect(character.hp).toBe(100);
        });

        test('`character` является экземпляром `Character`', () => {
            let character = new Character('Benedict', 'Sword');

            expect(character).toBeInstanceOf(Character);
        });

        test('Конструктором прототипа `Character` является `Character`', () => {
            expect(Character.prototype.constructor).toBe(Character);
        });

        test('`character.greet()` возвращает приветстви', () => {
            let character = new Character('Benedict');

            expect(character.greet()).toBe('Приветствую!');
        });
    });

    describe('`Warrior`', () => {
        test('`Warrior` объявлен', () => {
            expect(Warrior).toBeDefined();
        });

        test('`Warrior` являются функцией', () => {
            expect(Warrior).toBeInstanceOf(Function);
        });

        test('`Warrior` создает воина', () => {
            let warrior = new Warrior('Benedict', 'Sword');

            expect(warrior.name).toBe('Benedict');
            expect(warrior.hp).toBe(100);
            expect(warrior.weapon).toBe('Sword');
            expect(warrior.stamina).toBe(100);
        });

        test('`warrior` является экземпляром `Character` и `Warrior`', () => {
            let warrior = new Warrior('Benedict', 'Sword');

            expect(warrior).toBeInstanceOf(Character);
            expect(warrior).toBeInstanceOf(Warrior);
        });

        test('Конструктором прототипа `Warrior` является `Warrior`', () => {
            expect(Warrior.prototype.constructor).toBe(Warrior);
        });

        test('`warrior.greet()` возвращает приветствие', () => {
            let warrior = new Warrior('Benedict');

            expect(warrior.greet()).toBe('Приветствую!');
        });

        test('`warrior.attack(character)` наносит урон и отнимает стамину', () => {
            let hero = new Warrior('Benedict', 'Sword');
            let foe = new Warrior('Zag', 'Hammer');

            hero.attack(foe);

            expect(hero.stamina).toBe(90);
            expect(foe.hp).toBeLessThan(100);
        });
    });

    describe('`Knight`', () => {
        test('`Knight` объявлен', () => {
            expect(Knight).toBeDefined();
        });

        test('`Knight` являются функцией', () => {
            expect(Knight).toBeInstanceOf(Function);
        });

        test('`Knight` создает воина', () => {
            let knight = new Knight('Benedict', 'Sword');

            expect(knight.name).toBe('Benedict');
            expect(knight.hp).toBe(100);
            expect(knight.weapon).toBe('Sword');
            expect(knight.stamina).toBe(100);
            expect(knight.mp).toBe(100);
        });

        test('`knight` является экземпляром `Character`, `Warrior` и `Knight`', () => {
            let knight = new Knight('Benedict', 'Sword');

            expect(knight).toBeInstanceOf(Character);
            expect(knight).toBeInstanceOf(Warrior);
            expect(knight).toBeInstanceOf(Knight);
        });

        test('Конструктором прототипа `Knight` является `Knight`', () => {
            expect(Knight.prototype.constructor).toBe(Knight);
        });

        test('`knight.greet()` возвращает приветствие', () => {
            let knight = new Knight('Benedict');

            expect(knight.greet()).toBe('Приветствую!');
        });

        test('`knight.attack(character)` наносит урон и отнимает стамину', () => {
            let hero = new Knight('Benedict', 'Sword');
            let foe = new Knight('Zag', 'Hammer');
            let damaged = hero.attack(foe);

            expect(hero.stamina).toBe(90);
            expect(foe.hp).toBe(100 - damaged);
        });

        test('`knight.heal(character)` восстанавливает здоровье и отнимает ману', () => {
            let hero = new Knight('Benedict', 'Sword');
            let friend = new Warrior('Zag', 'Hammer');
            let foe = new Warrior('Zag', 'Hammer');
            let damaged = foe.attack(friend);
            let restored = hero.heal(friend);

            expect(friend.hp).toBe(100 - damaged + restored);
            expect(hero.mp).toBe(90);
        });
    });
});
