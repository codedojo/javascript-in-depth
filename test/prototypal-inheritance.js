module.exports = {
    title: 'Прототипное наследование',
    tests: [
        {
            description: '`Character`, `Warrior` и `Knight` объявлены',
            assertion: ({ Character, Warrior, Knight }) => {
                expect(Character).toBeDefined();
                expect(Warrior).toBeDefined();
                expect(Knight).toBeDefined();
            }
        },
        {
            description: '`Character`, `Warrior` и `Knight` являются функциями',
            assertion: ({ Character, Warrior, Knight }) => {
                expect(Character).toBeInstanceOf(Function);
                expect(Warrior).toBeInstanceOf(Function);
                expect(Knight).toBeInstanceOf(Function);
            }
        },
        {
            description: '`Character` создает персонажа',
            assertion: ({ Character }) => {
                let character = new Character('Benedict');

                expect(character.name).toBe('Benedict');
                expect(character.hp).toBe(100);
            }
        },
        {
            description: '`character` является экземпляром `Character`',
            assertion: ({ Character, Warrior }) => {
                let warrior = new Warrior('Benedict', 'Sword');

                expect(warrior).toBeInstanceOf(Character);
                expect(warrior).toBeInstanceOf(Warrior);
            }
        },
        {
            description: 'Конструктором прототипа `Character` является `Character`',
            assertion: ({ Character }) => {
                expect(Character.prototype.constructor).toBe(Character);
            }
        },
        {
            description: '`character.greet()` возвращает приветствие',
            assertion: ({ Character }) => {
                let character = new Character('Benedict');

                expect(character.greet()).toBe('Приветствую!');
            }
        },
        {
            description: '`Warrior` создает воина',
            assertion: ({ Character, Warrior }) => {
                let warrior = new Warrior('Benedict', 'Sword');

                expect(warrior.name).toBe('Benedict');
                expect(warrior.hp).toBe(100);
                expect(warrior.weapon).toBe('Sword');
                expect(warrior.stamina).toBe(100);
            }
        },
        {
            description: '`warrior` является экземпляром `Character` и `Warrior`',
            assertion: ({ Character, Warrior }) => {
                let warrior = new Warrior('Benedict', 'Sword');

                expect(warrior).toBeInstanceOf(Character);
                expect(warrior).toBeInstanceOf(Warrior);
            }
        },
        {
            description: 'Конструктором прототипа `Warrior` является `Warrior`',
            assertion: ({ Warrior }) => {
                expect(Warrior.prototype.constructor).toBe(Warrior);
            }
        },
        {
            description: '`warrior.greet()` возвращает приветствие',
            assertion: ({ Warrior }) => {
                let warrior = new Warrior('Benedict');

                expect(warrior.greet()).toBe('Приветствую!');
            }
        },
        {
            description: '`warrior.attack(character)` наносит урон и отнимает стамину',
            assertion: ({ Character, Warrior }) => {
                let hero = new Warrior('Benedict', 'Sword');
                let foe = new Warrior('Zag', 'Hammer');
                
                hero.attack(foe);

                expect(hero.stamina).toBe(90);
                expect(foe.hp).toBeLessThan(100);
            }
        },
        {
            description: '`Knight` создает воина',
            assertion: ({ Character, Warrior, Knight }) => {
                let knight = new Knight('Benedict', 'Sword');

                expect(knight.name).toBe('Benedict');
                expect(knight.hp).toBe(100);
                expect(knight.weapon).toBe('Sword');
                expect(knight.stamina).toBe(100);
                expect(knight.mp).toBe(100);
            }
        },
        {
            description: '`knight` является экземпляром `Character`, `Warrior` и `Knight`',
            assertion: ({ Character, Warrior, Knight }) => {
                let knight = new Knight('Benedict', 'Sword');

                expect(knight).toBeInstanceOf(Character);
                expect(knight).toBeInstanceOf(Warrior);
                expect(knight).toBeInstanceOf(Knight);
            }
        },
        {
            description: 'Конструктором прототипа `Knight` является `Knight`',
            assertion: ({ Knight }) => {
                expect(Knight.prototype.constructor).toBe(Knight);
            }
        },
        {
            description: '`warrior.greet()` возвращает приветствие',
            assertion: ({ Knight }) => {
                let knight = new Knight('Benedict');

                expect(knight.greet()).toBe('Приветствую!');
            }
        },
        {
            description: '`knight.attack(character)` наносит урон и отнимает стамину',
            assertion: ({ Character, Warrior, Knight }) => {
                let hero = new Knight('Benedict', 'Sword');
                let foe = new Knight('Zag', 'Hammer');

                let damaged = hero.attack(foe);

                expect(hero.stamina).toBe(90);
                expect(foe.hp).toBe(100 - damaged);
            }
        },
        {
            description: '`knight.heal(character)` восстанавливает здоровье и отнимает ману',
            assertion: ({ Character, Warrior, Knight }) => {
                let hero = new Knight('Benedict', 'Sword');
                let friend = new Warrior('Zag', 'Hammer');
                let foe = new Warrior('Zag', 'Hammer');

                let damaged = foe.attack(friend);
                let restored = hero.heal(friend);

                expect(friend.hp).toBe(100 - damaged + restored);
                expect(hero.mp).toBe(90);
            }
        }
    ]
};