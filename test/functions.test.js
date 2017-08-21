'use strict';

let exercises = [
    {
        filename: 'value',
        problem: 'Напишите функцию `value`',
        tests: [
            {
                description: 'Модуль возращает функцию',
                assertion: value => expect(value).toBeInstanceOf(Function)
            },
            {
                description: '`value` возращает передаваемое ей значение',
                assertion: value => expect(value(42)).toBe(42)
            }
        ]
    },
    {
        filename: 'value-fn',
        problem: 'Напишите функцию `value`',
        tests: [
            {
                description: 'Модуль возращает функцию',
                assertion: value => expect(value).toBeInstanceOf(Function)
            },
            {
                description: '`value` возвращает функцию',
                assertion: value => expect(value()).toBeInstanceOf(Function)
            },
            {
                description: 'Возращаемая функция возвращает передаваемое в `value` значение',
                assertion: value => {
                    let three = value(3);

                    expect(three()).toBe(3);
                }
            }
        ]
    },
    {
        filename: 'add',
        problem: 'Напишите функцию `add`',
        tests: [
            {
                description: 'Модуль возращает функцию',
                assertion: add => expect(add).toBeInstanceOf(Function)
            },
            {
                description: '`add` возращает функцию',
                assertion: add => expect(add()).toBeInstanceOf(Function)
            },
            {
                description: 'Второй вызов складывает числа',
                assertion: add => expect(add(3)(4)).toBe(7)
            }
        ]
    },
    {
        filename: 'twice',
        problem: 'Напишите функцию `twice`',
        tests: [
            {
                description: 'Модуль возращает функцию',
                assertion: twice => expect(twice).toBeInstanceOf(Function)
            },
            {
                description: '`add` возращает функцию',
                assertion: twice => expect(twice()).toBeInstanceOf(Function)
            },
            {
                description: '',
                assertion: twice => expect(twice((x, y) => x + y)(7)).toBe(14)
            }
        ]
    },
    {
        filename: 'limit',
        problem: 'Напишите функцию `limit`',
        tests: [
            {
                description: 'Модуль возращает функцию',
                assertion: limit => expect(limit).toBeInstanceOf(Function)
            },
            {
                description: '`limit` возращает функцию',
                assertion: limit => expect(limit()).toBeInstanceOf(Function)
            },
            {
                description: '`limit` ограничивает количество вызовов функции',
                assertion: limit => {
                    let limited = limit(() => 42, 2);

                    expect(limited()).toBe(42);
                    expect(limited()).toBe(42);
                    expect(limited()).toBe(false);
                }
            }
        ]
    },
    {
        filename: 'protect',
        problem: 'Напишите функцию `protect`',
        tests: [
            {
                description: 'Модуль возращает функцию',
                assertion: protect => expect(protect).toBeInstanceOf(Function)
            },
            {
                description: '`protect` возращает функцию',
                assertion: protect => expect(protect(42, '123456')).toBeInstanceOf(Function)
            },
            {
                description: '`protect` защищает вызов функции паролем',
                assertion: protect => {
                    let safe = protect(42, '123456');

                    expect(safe('123456')).toBe(42);
                    expect(safe()).toBeUndefined();
                }
            }
        ]
    },
    // {
    //     filename: 'create-counter',
    //     problem: 'Напишите функцию `createCounter`',
    //     tests: [
    //         {
    //             description: 'Модуль возращает функцию',
    //             assertion: createCounter => assert.equal(typeof createCounter, 'function')
    //         },
    //         {
    //             description: '`createCounter` возращает функцию',
    //             assertion: createCounter => assert.equal(typeof createCounter(), 'function')
    //         },
    //         {
    //             description: 'Вызывая `createCounter` без аргументов, используются значения параметров по умолчанию',
    //             assertion: createCounter => {
    //                 let count = createCounter();

    //                 assert.equal(count(), 1);
    //             }
    //         },
    //         {
    //             description: 'Вызывая `createCounter` c аргументами, используются передаваемые значения',
    //             assertion: createCounter => {
    //                 let count = createCounter(0, 10);

    //                 assert.equal(count(), 10);
    //             }
    //         }
    //     ]
    // },
    // {
    //     filename: 'create-list',
    //     problem: 'Напишите функцию `createList`',
    //     tests: [
    //         {
    //             description: 'Модуль возращает функцию',
    //             assertion: createList => assert.equal(typeof createList, 'function')
    //         },
    //         {
    //             description: '`createList` возращает объект',
    //             assertion: createList => assert.equal(typeof createList(), 'object')
    //         },
    //         {
    //             description: '`createList` использует значение по умолчанию',
    //             assertion: createList => {
    //                 let list = createList([1, 2, 3]);

    //                 assert.equal(list.getLength(), 3);
    //             }
    //         },
    //         {
    //             description: '`createList.getLength` возвращает длину списка',
    //             assertion: createList => assert.equal(typeof createList().getLength(), 'number')
    //         },
    //         {
    //             description: '`createList.add` добавляет элемент в список',
    //             assertion: createList => {
    //                 let list = createList();

    //                 list.add(1);

    //                 assert.equal(list.getLength(), 1);
    //             }
    //         },
    //         {
    //             description: '`createList.get` возращает указанный в индексе элемент',
    //             assertion: createList => {
    //                 let list = createList();

    //                 list.add(1);

    //                 assert.equal(list.get(0), 1);
    //             }
    //         },
    //         {
    //             description: '`createList.set` обновляет указанный в индексе элемент',
    //             assertion: createList => {
    //                 let list = createList();

    //                 list.add(1);
    //                 list.set(0, 2);

    //                 assert.equal(list.get(0), 2);
    //             }
    //         },
    //         {
    //             description: '`createList.remove` удаляет элемент с переданным значением',
    //             assertion: createList => {
    //                 let list = createList();

    //                 list.add(1);
    //                 list.remove(1);

    //                 assert.equal(list.getLength(), 0);
    //             }
    //         },
    //         {
    //             description: '`createList.toString` возращает элементы списка в виде строки',
    //             assertion: createList => {
    //                 let list = createList();

    //                 list.add(1);
    //                 list.add(2);
    //                 list.add(3);

    //                 assert.equal(list.toString(), '1,2,3');
    //             }
    //         }
    //     ]
    // },
    // {
    //     filename: 'bind',
    //     problem: 'Напишите функцию `bind`',
    //     tests: [
    //         {
    //             description: 'Модуль возращает функцию',
    //             assertion: bind => assert.equal(typeof bind, 'function')
    //         },
    //         {
    //             description: '`bind` возращает функцию',
    //             assertion: bind => assert.equal(typeof bind(function () { }, {}), 'function')
    //         },
    //         {
    //             description: '`bind` привязывает указанное значение `this` к передаваемой функции',
    //             assertion: bind => {
    //                 let obj = {};
    //                 let boundFn = bind(function () { return this; }, obj);

    //                 assert.strictEqual(boundFn(), obj);
    //             }
    //         },
    //         {
    //             description: '`bind` привязывает указанные аргументы к передаваемой функции',
    //             assertion: bind => {
    //                 let obj = {};
    //                 let bound = bind(function (x) { return arguments[0] + x; }, obj, 1);

    //                 assert.equal(bound(1), 2);
    //             }
    //         }
    //     ]
    // }
];

describe('Функции:', () => {
    exercises.forEach((exercise, index) => {
        describe(`Упражнение ${index + 1}: ${exercise.problem}`, () => {
            let solution;

            beforeEach(() => solution = require(`../exercises/${exercise.filename}`));

            exercise.tests.forEach(test => {
                if (test.async) {
                    it(test.description, done => test.assertion(solution, done));
                } else {
                    it(test.description, () => test.assertion(solution));
                }
            });
        });
    });
});