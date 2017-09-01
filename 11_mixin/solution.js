'use strict';

function mixin(target, ...sources) {
    for (let source of sources) {
        for (let key in source) {
            if (source.hasOwnProperty(key)) {
                target[key] = source[key];
            }
        }
    }
}



module.exports = mixin;