/**
 * TODO:
 * - Создать объект `character` с помощью `Object.create`.
 * - В качестве прототипа указать `Object.prototype`.
 * - При создании объекта определить свойства `name: 'Benedict'` и `hp: 100`,
 * используя второй аргумент `Object.create`.
 */

let character = Object.create(Object.prototype, {
    name: {
        value: 'Benedict'
    }
}, {
    hp: {
        value: 100
    } 
});


/**
 * TODO:
 * - Создать объект `warrior` с помощью `Object.create`.
 * - В качестве прототипа указать `character`.
 * - При создании, объекту определить свойство `weapon` со значением `Sword`,
 * используя второй аргумент `Object.create`.
 */

let warrior = Object.create(character, {
    weapon: {
        value: 'Sword'
    }
})



/**
 * TODO:
 * - Создать объект `knight` с помощью `Object.create`.
 * - В качестве прототипа указать `warrior`.
 * - При создании, объекту определить свойство `mp` со значением 100,
 * используя второй аргумент `Object.create`.
 */

let knight = Object.create(warrior, {
    mp: {
        value: 100
    }
})



module.exports = {
    character,
    warrior,
    knight
}