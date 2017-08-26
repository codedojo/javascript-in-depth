/**
 * TODO:
 * Создать функцию `Character`, которая создает
 * объект со свойствами `name: string` и `hp: number`.
 */

function Character(name) {
    this.name = name;
    this.hp = 100;
};



/**
 * TODO:
 * Прототипу `Character` добавить метод `greet`,
 * который будет выводить в консоль строку приветствия 'Приветствую!'
 */

Character.prototype.greet = function() {
    return 'Приветствую!';
};



/**
 * TODO:
 * Создать функцию `Warrior`, которая создает
 * объект со свойствами `name: string`, `hp: number`,
 * `weapon: string` и `stamina: number`.
 */

function Warrior(name, weapon) {
    Character.call(this, name)
    this.weapon = weapon;
    this.stamina = 100;
};



/**
 * TODO:
 * - Связать прототип `Warrior` с прототипом `Character`.
 * - Конструктором прототипа `Warrior` сделать функцию `Warrior`.
 */

Warrior.prototype = Object.create(Character.prototype);
Warrior.prototype.constructor = Warrior;



/**
 * TODO:
 * Прототипу `Warrior` добавить метод `attack`, который:
 * - принимает в качестве аргумента персонажа,
 * - снимает ему здоровье (случайное число от 1 до 10),
 * - отнимает 10 едениц стамины,
 * - возвращает нанесенный урон
 */

Warrior.prototype.attack = function(character) {
    let points = Math.ceil(Math.random() * 10);
    character.hp -= points;
    this.stamina -= 10;

    return points;
}



/**
 * TODO:
 * Создать функцию `Knight`, которая создает
 * объект со свойствами `name: string`, `hp: number`,
 * `weapon: string`, `stamina: number` и `mp: number`.
 */

function Knight(name, weapon) {
    Warrior.call(this, name, weapon);
    this.mp = 100;
}



/**
 * TODO:
 * - Связать прототип `Knight` с прототипом `Warrior`.
 * - Конструктором прототипа `Knight` сделать функцию `Knight`.
 */

Knight.prototype = Object.create(Warrior.prototype);
Knight.prototype.constructor = Knight;



/**
 * TODO:
 * Прототипу `Knight` добавить метод `heal`, который:
 * - принимает в качестве аргумента персонажа,
 * - восстанавливать ему здоровье (случайное число от 1 до 10),
 * - отнимать 10 едениц маны
 * - возвращает нанесенный урон
 */

Knight.prototype.heal = function(character) {
    let points = Math.ceil(Math.random() * 10);

    character.hp += points;
    this.mp -= 10;

    return points;
}



module.exports = {
    Character,
    Warrior,
    Knight
};