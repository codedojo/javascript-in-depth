/**
 * TODO:
 * Создать функцию `Character`, которая:
 * - при вызове с помощью `new` вернет экземпляр Character`
 * - при вызове без `new` вернет глобальный объект
 */

function Character() {
    return this;
}


/**
 * TODO:
 * Создать функцию `Warrior`, которая:
 * - при вызове с помощью `new` вернет объект не являющийся экземпляром `Warrior`
 * - при вызове без `new` вернет объект не являющийся глобальный объектом
 */

function Warrior() {
    return Object.create(null);
}



module.exports = {
    Character,
    Warrior
};