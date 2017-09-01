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