const deepFreeze  = require('./index');

test('`deepRreeze` замораживает объект на всех уровнях', () => {
    let object = { prop1: {}, prop2: [] };

    deepFreeze(object);

    expect(Object.isFrozen(object)).toBe(true);
});