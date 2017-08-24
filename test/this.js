module.exports = {
    title: '`this`',
    tests: [
        {
            description: '`Character` объявлен',
            assertion: ({ Character }) => expect(Character).toBeDefined()
        },
        {
            description: '`Character` является функцией',
            assertion: ({ Character }) => expect(Character).toBeInstanceOf(Function)
        },
        {
            description: '`Character` при вызове с помощью `new` возвращает экземпляр Character`',
            assertion: ({ Character }) => {
                let character = new Character();

                expect(character).toBeInstanceOf(Character);
            }
        },
        {
            description: '`Character` при вызове без `new` возвращает глобальный объект',
            assertion: ({ Character }) => {
                expect(Character()).toEqual(global)
            }
        },
        {
            description: '`Warrior` объявлен',
            assertion: ({ Warrior }) => expect(Warrior).toBeDefined()
        },
        {
            description: '`Warrior` является функцией',
            assertion: ({ Warrior }) => expect(Warrior).toBeInstanceOf(Function)
        },
        {
            description: '`Warrior` при вызове с помощью `new` возвращает пустой объект',
            assertion: ({ Warrior }) => {
                let warrior = new Warrior();

                expect(warrior).not.toBeInstanceOf(Warrior);
            }
        },
        {
            description: '`Warrior` при вызове без `new` возвращает пустой объект',
            assertion: ({ Warrior }) => expect(Warrior()).not.toEqual(global)
        }
    ]
};