/**
 * TODO:
 * - Создайте функцию `Character` принимающую параметр `name`.
 * - В функции присвойте `this` свойство `name` со значением параметра `name`
 * и свойство `hp` со значением 100.
 */

function Character(name) {
    this.name = name;
    this.hp = 100;
}



/**
 * TODO:
 * - Создайте объект, используя функцию `Character`
 * и поместите его в переменную `character`.
 */

let character = new Character('Benedict');



module.exports = {
    Character,
    character
};