module.exports = {
    title: 'Создание простого объекта',
    tests: [
        {
            description: '`character объявлен`',
            assertion: ({ character }) => {
                expect(character).toBeDefined();
            }
        },
        {
            description: 'У объекта есть необходимые свойства',
            assertion: ({ character }) => {
                expect(character).toMatchObject({ name: 'Benedict', hp: 100 });
            }
        }
    ]
};