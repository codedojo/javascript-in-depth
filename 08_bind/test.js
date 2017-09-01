const bind = require('./index');

describe('', () => {
    test('возращает функцию', () => {
        function fn() {}

        expect(bind(fn, {})).toBeInstanceOf(Function);
    });

    test('привязывает указанное значение `this` к передаваемой функции', () => {
        function fn() {
            return this;
        }
        let obj = {};
        let boundFn = bind(fn, obj);

        expect(boundFn()).toBe(obj);
    });

    test('привязывает указанные аргументы к передаваемой функции', () => {
        function fn(x) {
            return arguments[0] + x;
        }
        let obj = {};
        let bound = bind(fn, obj, 1);

        expect(bound(1)).toBe(2);
    });
});