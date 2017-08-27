'use strict';

function Character(name) {
    this.name;
    this.hp = 100;
}

let robert = new Character('Robert');
let richard = new Character('Richard');

robert.hp -= 25;

Character.prototype.inventory = [];

richard.inventory.push('fish');



module.exports = {
    Character,
    richard,
    robert
};