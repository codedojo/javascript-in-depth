'use strict';

function add(x) {
    return function(y) {
        return x + y;
    }
}



module.exports = add;