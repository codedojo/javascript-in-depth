module.exports = {
    title: 'Создать объект Chatacter, создающий другие объекты',
    tests: [
        {
            description: '`Character` объявлен',
            assertion: Character => expect(Character).toBeDefined()
        },
        {
            description: '`Character` является объектом',
            assertion: Character => expect(Character).toBeInstanceOf(Object)
        },
        {
            description: '`Character.new` возвращать новый объект, прототипом которого является `Character',
            assertion: Character => {
                let character = Character.new();

                expect(Character.isPrototypeOf(character)).toBe(true);
            }
        }
    ]
};