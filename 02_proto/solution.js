'use strict';

let character = {
    name: 'Benedict',
    hp: 100
};

let warrior = {
    weapon: 'Sword'
};

let knight = {
    mp: 100,
    spell: 'Holy Blast'
};



warrior.__proto__ = character;

knight.__proto__ = warrior;



module.exports = {
    character,
    warrior,
    knight
};