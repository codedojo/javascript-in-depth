const getSet = require('../exercises/set');

describe('set', () => {
    let set;

    beforeEach(() => {
        set = getSet();
    });

    test('set определен', () => {
        expect(set).toBeDefined();
    });

    test('set.has возвращает true или false в зависимости о того есть ли элемент в наборе', () => {
        expect(set.has('eggs')).toBe(false);

        set.add('eggs');

        expect(set.has('eggs')).toBe(true);
    });

    test('set.add добавляет элемент в набор, если его там нет', () => {
        expect(set.add('eggs').size()).toBe(1);
        expect(set.add('eggs').size()).toBe(1);
    });

    test('set.delete удаляет элемент из набора', () => {
        set.add('eggs');

        expect(set.delete('eggs')).toBe(true);
        expect(set.size()).toBe(0);
    });

    test('set.clear удаляет все элементы из набора', () => {
        set.add('eggs');
        set.add('apples');

        expect(set.clear().size()).toBe(0);
    });

    test('set.size возвращает количество элементов в наборе', () => {
        set.add('eggs');
        set.add('apples');

        expect(set.size()).toBe(2);
    });

    test('set.keys возвращает массив с ключами элементов набора', () => {
        set.add('eggs');
        set.add('apples');

        expect(set.keys()).toEqual(['eggs', 'apples']);
    });

    test('set.values возвращает массив со значениями элементов набора', () => {
        set.add('eggs');
        set.add('apples');

        expect(set.values()).toEqual(['eggs', 'apples']);
    });

    test('set.entries возвращает массив, в котором каждый элемент является массивом типа [key, value]', () => {
        set.add('eggs');
        set.add('apples');

        expect(set.entries()).toEqual([['eggs', 'eggs'], ['apples', 'apples']]);
    });

    test('set.forEach вызывает передаваемую фукнцию для каждого элемента массива, отпавляя в нее value, key и set', () => {
        let callback = jest.fn();

        set.add('eggs');
        set.add('apples');
        set.forEach(callback);

        expect(callback.mock.calls.length).toBe(2);
        expect(callback.mock.calls[0][0]).toBe('eggs');
        expect(callback.mock.calls[0][1]).toBe('eggs');
        expect(callback.mock.calls[0][2]).toBe(set);
    });
});