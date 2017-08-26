/**
 * TODO:
 * - Создать объект `Character`.
 * - У объекта определить метод `new`
 * - При вызове, `Character.new` должен возвращать новый объект,
 * прототипом которого является `Character`.
 */

// ???

Character = {};
Character.new = function() {
    return {
        __proto__: Character
    }
}



module.exports = Character;