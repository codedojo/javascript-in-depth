module.exports = {
    title: 'Связать объекты с помощью свойства `__proto__`',
    tests: [
        {
            description: '`character`, `warrior` и `knight` объявлены',
            assertion: ({ character, warrior, knight }) => {
                expect(character).toBeDefined();
                expect(warrior).toBeDefined();
                expect(knight).toBeDefined();
            }
        },
        {
            description: '`character` является прототипом `warrior`',
            assertion: ({ character, warrior, knight }) => {
                expect(character.isPrototypeOf(warrior)).toBe(true);
            }
        },
        {
            description: '`warrior` является прототипом `knight`',
            assertion: ({ character, warrior, knight }) => {
                expect(warrior.isPrototypeOf(knight)).toBe(true);
            }
        },
        {
            description: '`character` является прототипом `knight`',
            assertion: ({ character, warrior, knight }) => {
                expect(character.isPrototypeOf(knight)).toBe(true);
            }
        },
        {
            description: '`knight` имеет доступ к свойствам прототипов',
            assertion: ({ character, warrior, knight }) => {
                expect(knight.name).toBe('Benedict');
                expect(knight.hp).toBe(100);
                expect(knight.weapon).toBe('Sword');
            }
        }
    ]
};