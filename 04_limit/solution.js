'use strict';

function limit(fn, n) {
    let count = 0;

    return function (...args) {
        if (count < n) {
            count += 1;
            return fn(...args);
        } else {
            return false;
        }
    };
}



module.exports = limit;