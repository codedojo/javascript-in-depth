'use strict';

function wait(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
}



module.exports = wait;