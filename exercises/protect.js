/*
    ЗАДАНИЕ: Напишите функцию `protect`, которая принимает
    значение (value) и пароль (password). `protect` возвращает функцию, которая принимает
    строку (string) и если она совпадает с паролем (string === password), то фукнция возращает значение (value).

    ПРИМЕР:

    let getSecret = protect('1234-5678-9012-3456', 'qwerty');

    getSecret('qwerty'); // '1234-5678-9012-3456'
    getSecret(); // undefined
*/

function protect(value, password) {
    return function (string) {
        if (string === password) {
            return value;
        }
    };
}

module.exports = protect;