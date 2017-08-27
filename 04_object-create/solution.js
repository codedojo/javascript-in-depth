'use strict';

let character = Object.create(Object.prototype, {
    name: { value: 'Benedict' },
    hp: { value: 100 }
});

let warrior = Object.create(character, {
    weapon: { value: 'Sword' }
});

let knight = Object.create(warrior, {
    mp: { value: 100 }
});



module.exports = {
    character,
    warrior,
    knight
};