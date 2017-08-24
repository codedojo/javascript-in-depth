module.exports = {
    title: 'Цепочка прототипов',
    tests: [
        {
            description: '`character`, `warrior` и `knight` имеют доступ к свойству `race`, но определено оно только у `character`',
            assertion: ({ character, warrior, knight }) => {
                expect(character.hasOwnProperty('race')).toBe(true);
                expect(character.race).toBe('Human');

                expect(warrior.hasOwnProperty('race')).toBe(false);
                expect(warrior.race).toBe('Human');

                expect(knight.hasOwnProperty('race')).toBe(false);
                expect(knight.race).toBe('Human');
            }
        },
        {
            description: '`warrior` и `knight` имеют доступ к свойству `hasShield`, но определено оно только у `warrior`',
            assertion: ({ character, warrior, knight }) => {
                expect(character.hasOwnProperty('hasShield')).toBe(false);
                expect(character.hasShield).toBeUndefined();

                expect(warrior.hasOwnProperty('hasShield')).toBe(true);
                expect(warrior.hasShield).toBe(true);

                expect(knight.hasOwnProperty('hasShield')).toBe(false);
                expect(knight.hasShield).toBe(true);
            }
        },
        {
            description: 'Только `knight` имеет доступ к свойству `spell`',
            assertion: ({ character, warrior, knight }) => {
                expect(character.spell).toBeUndefined();
                expect(warrior.spell).toBeUndefined();
                expect(knight.spell).toBe('Holy Blast');
            }
        }
    ]
};