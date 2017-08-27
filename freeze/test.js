const { freeze, deepFreeze } = require('./index');

describe('Object.freeze', () => {
    test('`freeze` замораживает объект', () => {
        let object = {};

        freeze(object);

        expect(Object.isFrozen(object)).toBe(true);
    });

    test('`deepRreeze` замораживает объект на всех уровнях', () => {
        let object = { prop1: {}, prop2: [] };

        deepFreeze(object);

        expect(Object.isFrozen(object)).toBe(true);
    });
});