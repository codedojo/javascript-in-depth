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

/**
 * TODO: Сделайте так, чтобы у всех объектов появился доступ к свойству `race: 'Human'`
 */

character.race = 'Human';



/**
 * TODO: Сделайте так, чтобы у `warrior` и `knight` появилось свойство `hasShield: true`
 */

warrior.hasShield = true;



/**
 * TODO: Сделайте так, чтобы у `knight` появилось свойство `spell: 'Holy Blast'`
 */

knight.spell = 'Holy Blast';



module.exports = {
    character,
    warrior,
    knight
};