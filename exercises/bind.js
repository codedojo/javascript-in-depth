/*
    ЗАДАНИЕ: Напишите функцию `bind` которая принимает в качестве аргументов
    функцию, значение для `this` к которому необходимо привязать функцию
    и аргументы, который также привязываются к функции.

    ПРИМЕР:
    
    let person = { firstname: 'Brendan', lastname: 'Eich' };

    function print() {
        console.log(this);
    }

    print(); // global или undefined

    let printPerson = bind(print, person);

    printPerson(); // { firstname: 'Brendan', lastname: 'Eich' }
*/

function bind(fn, thisValue, ...bindArgs) {
    return function(...args) {
        return fn.call(thisValue, ...bindArgs, ...args);
    };
}

module.exports = bind;