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
 * TODO: Создать два экземпляра `Character` - robert и richard.
 */

let robert = new Character('Robert');
let richard = new Character('Richard');




/**
 * TODO: Отнять у Роберта 25 очков здоровья
 */

robert.hp -= 25;



/**
 * TODO: Добавить в прототип `Character` свойство `inventory`, которое будет массивом.
 */

Character.prototype.inventory = [];



/**
 * TODO: Добавить предмет в инвентароь Ричарда
 */

richard.inventory.push('Knight');



module.exports = {
    Character,
    robert,
    richard
};