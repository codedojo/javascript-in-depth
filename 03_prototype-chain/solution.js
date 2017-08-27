'use strict';

let character = {
    name: 'Benedict',
    hp: 100
};

let warrior = {
    weapon: 'Sword'
};

let knight = {
    mp: 100
};

warrior.__proto__ = character;
knight.__proto__ = warrior;

character.race = 'Human';
warrior.hasShield = true;
knight.spell = 'Holy Blast';



module.exports = {
    character,
    warrior,
    knight
};