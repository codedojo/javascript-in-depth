/*
    ЗАДАНИЕ: Напишите функцию `limit`, которая принимает в качестве аргументов
    фукнцию (fn) и число (n). Число определяет сколько раз функцию можно вызвать.
    Если количество вызовов превышено, но фукцния должна вернуть false.

    ПРИМЕР:

    function playGame() {
        console.log('Playing game =)')
    }

    let playGameLimited = limit(playGame, 3);

    playGameLimited(); // 'Playing game =)'
    playGameLimited(); // 'Playing game =)'
    playGameLimited(); // 'Playing game =)'
    playGameLimited(); // undefined =(
*/

function limit(fn, n) {
    let count = 0;

    return function (...args) {
        if (count < n) {
            count += 1;
            return fn(...args);
        } else {
            return false;
        }
    };
}

module.exports = limit;