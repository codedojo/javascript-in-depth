'use strict';

function createCounter(start = 0, step = 1) {
    return function () {
        return start += step;
    };
}



module.exports = createCounter;