const createList = require('./index');

describe('createList', () => {
    test('возращает объект', () => {
        expect(createList()).toBeInstanceOf(Object);
    });

    test('использует значение по умолчанию', () => {
        let list = createList([1, 2, 3]);

        expect(list.getLength()).toBe(3);
    });

    test('`createList.getLength` возвращает длину списка', () => {
        expect(createList().getLength()).toBeInstanceOf(Number);
    });

    test('`createList.add` добавляет элемент в список', () => {
        let list = createList();

        list.add(1);

        expect(list.getLength()).toBe(1);
    });

    test('`createList.get` возращает указанный в индексе элемент', () => {
        let list = createList();

        list.add(1);

        expect(list.get(0)).toBe(1);
    });

    test('`createList.set` обновляет указанный в индексе элемент', () => {
        let list = createList();

        list.add(1);
        list.set(0, 2);

        expect(list.get(0)).toBe(2);
    });

    test('`createList.remove` удаляет элемент с переданным значением', () => {
        let list = createList();

        list.add(1);
        list.remove(1);

        expect(list.getLength()).toBe(0);
    });

    test('`createList.toString` возращает элементы списка в виде строки', () => {
        let list = createList();

        list.add(1);
        list.add(2);
        list.add(3);

        expect(list.toString()).toBe('1,2,3');
    });
});