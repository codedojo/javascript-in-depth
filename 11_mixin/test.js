const mixin = require('./solution');

describe('mixin', () => {
    test('объявлен', () => {
        expect(mixin).toBeDefined();
    });

    test('является функцией', () => {
        expect(mixin).toBeInstanceOf(Function);
    });

    test('копирует свойства из нескольких объектов в один', () => {
        let target = {};
        let source1 = { prop1: 'foo' };
        let source2 = { prop2: 42 };

        mixin(target, source1, source2);

        expect(target).toHaveProperty('prop1', 'foo');
        expect(target).toHaveProperty('prop2', 42);
    });
});