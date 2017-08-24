module.exports = {
    title: 'Вызов функции как конструктор',
    tests: [
        {
            description: '`Character` объявлена',
            assertion: ({ Character }) => expect(Character).toBeDefined()
        },
        {
            description: '`Character` является функцией',
            assertion: ({ Character }) => expect(Character).toBeInstanceOf(Function)
        },
        {
            description: '`Character` создает новый объект персонажа',
            assertion: ({ Character }) => {
                let character = new Character('Benedict');

                expect(character).toBeInstanceOf(Character);
                expect(character).toMatchObject({ name: 'Benedict', hp: 100 });
            }
        },
        {
            description: '`character` объявлен',
            assertion: ({ character }) => expect(character).toBeDefined()
        },
        {
            description: '`character` является экземпляром Character',
            assertion: ({ Character, character }) => expect(character).toBeInstanceOf(Character)
        },
        {
            description: '`character` имеет необходимые свойства',
            assertion: ({ character }) => {
                expect(character).toHaveProperty('name');
                expect(character.name).toEqual(expect.any(String));

                expect(character).toHaveProperty('hp');
                expect(character.hp).toEqual(expect.any(Number));
            }
        }
    ]
};