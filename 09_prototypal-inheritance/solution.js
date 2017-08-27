'use strict';

function Character(name) {
    this.name = name;
    this.hp = 100;
}

Character.prototype.greet = function () {
    return 'Приветствую!';
};



function Warrior(name, weapon) {
    Character.call(this, name);
    this.weapon = weapon;
    this.stamina = 100;
}

Warrior.prototype = Object.create(Character.prototype);
Warrior.prototype.constructor = Warrior;

Warrior.prototype.attack = function (character) {
    let points = Math.ceil((Math.random() * 10));

    character.hp -= points;
    this.stamina -= 10;

    return points;
};



function Knight(name, weapon) {
    Warrior.call(this, name, weapon);
    this.mp = 100;
}

Knight.prototype = Object.create(Warrior.prototype);
Knight.prototype.constructor = Knight;

Knight.prototype.heal = function (character) {
    let points = Math.ceil((Math.random() * 10));

    character.hp += points;
    this.mp -= 10;

    return points;
};



module.exports = {
    Character,
    Warrior,
    Knight
};