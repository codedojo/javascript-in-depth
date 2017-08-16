const fs = require('fs');
const assert = require('assert');

let exercises = [
    {
        filename: 'limit',
        problem: 'Напишите функцию `limit`',
        tests: [
            {
                description: 'Модуль возращает функцию',
                assertion: limit => assert.equal(typeof limit, 'function')
            },
            {
                description: '`limit` возращает функцию',
                assertion: limit => assert.equal(typeof limit(), 'function')
            },
            {
                description: '`limit` ограничивает количество вызовов функции',
                assertion: limit => {
                    let limited = limit(() => 42, 2);

                    assert.equal(limited(), 42);
                    assert.equal(limited(), 42);
                    assert.equal(limited(), false);
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
                assertion: protect => assert.equal(typeof protect, 'function')
            },
            {
                description: '`protect` возращает функцию',
                assertion: protect => assert.equal(typeof protect(), 'function')
            },
            {
                description: '`protect` защищает вызов функции паролем',
                assertion: protect => {
                    let protected = protect(42, '123456');

                    assert.equal(protected('123456'), 42);
                    assert.equal(protected(), undefined);
                }
            }
        ]
    },
    {
        filename: 'create-counter',
        problem: 'Напишите функцию `createCounter`',
        tests: [
            {
                description: 'Модуль возращает функцию',
                assertion: createCounter => assert.equal(typeof createCounter, 'function')
            },
            {
                description: '`createCounter` возращает функцию',
                assertion: createCounter => assert.equal(typeof createCounter(), 'function')
            },
            {
                description: 'Вызывая `createCounter` без аргументов, используются значения параметров по умолчанию',
                assertion: createCounter => {
                    let count = createCounter();

                    assert.equal(count(), 1);
                }
            },
            {
                description: 'Вызывая `createCounter` c аргументами, используются передаваемые значения',
                assertion: createCounter => {
                    let count = createCounter(0, 10);

                    assert.equal(count(), 10);
                }
            }
        ]
    },
    {
        filename: 'create-list',
        problem: 'Напишите функцию `createList`',
        tests: [
            {
                description: 'Модуль возращает функцию',
                assertion: createList => assert.equal(typeof createList, 'function')
            },
            {
                description: '`createList` возращает объект',
                assertion: createList => assert.equal(typeof createList(), 'object')
            },
            {
                description: '`createList` использует значение по умолчанию',
                assertion: createList => {
                    let list = createList([1, 2, 3]);

                    assert.equal(list.getLength(), 3);
                }
            },
            {
                description: '`createList.getLength` возвращает длину списка',
                assertion: createList => assert.equal(typeof createList().getLength(), 'number')
            },
            {
                description: '`createList.add` добавляет элемент в список',
                assertion: createList => {
                    let list = createList();

                    list.add(1);

                    assert.equal(list.getLength(), 1);
                }
            },
            {
                description: '`createList.get` возращает указанный в индексе элемент',
                assertion: createList => {
                    let list = createList();

                    list.add(1);

                    assert.equal(list.get(0), 1);
                }
            },
            {
                description: '`createList.set` обновляет указанный в индексе элемент',
                assertion: createList => {
                    let list = createList();

                    list.add(1);
                    list.set(0, 2);

                    assert.equal(list.get(0), 2);
                }
            },
            {
                description: '`createList.remove` удаляет элемент с переданным значением',
                assertion: createList => {
                    let list = createList();

                    list.add(1);
                    list.remove(1);

                    assert.equal(list.getLength(), 0);
                }
            }
        ]
    },
    {
        filename: 'bind',
        problem: 'Напишите функцию `bind`',
        tests: [
            { 
                description: 'Модуль возращает функцию',
                assertion: bind => assert.equal(typeof bind, 'function')
            },
            {
                description: '`bind` возращает функцию',
                assertion: bind => assert.equal(typeof bind(), 'function')
            },
            {
                description: '`bind` привязывает указанное значение `this` к передаваемой функции',
                assertion: bind => {
                    let obj = {};
                    let boundFn = bind(function () { return this; }, obj);

                    assert.strictEqual(boundFn(), obj);
                }
            },
            {
                description: '`bind` привязывает указанные аргументы к передаваемой функции',
                assertion: bind => {
                    let obj = {};
                    let bound = bind(function (x) { return arguments[0] + x; }, obj, 1);

                    assert.equal(bound(1), 2);
                }
            }
        ]
    }
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