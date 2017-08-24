module.exports = {
    title: 'Создать объекты с помощью `Object.create`',
    tests: [
        {
            description: '`character`, `warrior`, `knight` объявлены',
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
        }
    ]
};