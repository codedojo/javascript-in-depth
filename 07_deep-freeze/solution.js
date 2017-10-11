'use strict';

function deepFreeze(object) {
    let isFreezable = Array.isArray(object) || typeof object === 'object';
    let isFrozen = Object.isFrozen(object);

    if (!isFreezable || isFrozen) return object;

    Object.freeze(object);
    Object.getOwnPropertyNames(object).forEach(prop => deepFreeze(object[prop]));

    return object;
}



module.exports = deepFreeze;