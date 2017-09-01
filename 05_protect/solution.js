'use strict';

function protect(value, password) {
    return function (string) {
        if (string === password) {
            return value;
        }
    };
}



module.exports = protect;