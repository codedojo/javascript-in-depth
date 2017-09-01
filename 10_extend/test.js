const extend = require('./solution');

describe('extend', () => {
    test('объявлен', () => {
        expect(extend).toBeDefined();
    });

    test('является функцией', () => {
        expect(extend).toBeInstanceOf(Function);
    });

    test('связывает прототипы', () => {
        function Parent() {}
        function Child() {}

        extend(Child, Parent);

        let parent = new Parent();
        let child = new Child();

        expect(child).toBeInstanceOf(Parent);
        expect(Parent.prototype.isPrototypeOf(child)).toBe(true);
    });
});