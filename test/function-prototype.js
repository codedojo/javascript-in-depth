module.exports = {
    title: 'Прототип функции',
    tests: [
        {
            description: '`Character`, `robert` и `richard` объявлен',
            assertion: ({ Character, robert, richard }) => {
                expect(Character).toBeDefined();
                expect(robert).toBeDefined();
                expect(richard).toBeDefined();
            }
        },
        {
            description: '`Character` является функцией',
            assertion: ({ Character }) => expect(Character).toBeInstanceOf(Function)
        },
        {
            description: '`robert` и `richard` является экземплярами `Character`',
            assertion: ({ Character, robert, richard }) => {
                expect(robert).toBeInstanceOf(Character);
                expect(richard).toBeInstanceOf(Character);
            }
        },
        {
            description: '`hp` у `robert` 75',
            assertion: ({ Character, robert, richard }) => {
                expect(robert.hp).toBe(75);
            }
        },
        {
            description: '`robert` и `richard` имеют доступ к свойству `inventory`',
            assertion: ({ Character, robert, richard }) => {
                expect(robert.inventory).toBeDefined();
                expect(richard.inventory).toBeDefined();

                expect(robert.hasOwnProperty('inventory')).toBe(false);
                expect(richard.hasOwnProperty('inventory')).toBe(false);
            }
        },
        {
            description: '`robert` и `richard` имеют предмет в инвентаре',
            assertion: ({ Character, robert, richard }) => {
                expect(robert.inventory).toHaveLength(1);
                expect(richard.inventory).toHaveLength(1);
            }
        }
    ]
};