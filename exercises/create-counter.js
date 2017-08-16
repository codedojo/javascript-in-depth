/*
    ЗАДАНИЕ: Напишите функцию `createCounter`, которая возвращает другую фукнцию, выполняющую счет.
    `createCounter` в качестве первого аргумента принимает число начала счета, и в качестве второго
    аргумента - шаг счета. Если в фукнцию не переданы аргументы, должны использоваться значения по
    умолчанию: начало счета - 0, шаг - 1.

    ПРИМЕР:

    let count = createCounter(1, 2);

    count(); // 3
    count(); // 5
    count(); // 7

    let count = createCounter();

    count(); // 1
    count(); // 2
    count(); // 3
*/

function createCounter(start = 0, step = 1) {
    return function () {
        return start += step;
    };
}

module.exports = createCounter;