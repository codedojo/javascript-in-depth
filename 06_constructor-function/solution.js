'use strict';

function Character(name) {
    this.name = name;
    this.hp = 100;
}

let character = new Character('Benedict');



module.exports = {
    Character,
    character
};