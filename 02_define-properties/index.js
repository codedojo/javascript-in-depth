'use strict';

let todo = {};

Object.defineProperties(todo, {
    title: {
        value: 'Разобраться с методами конфигурациии объекта',
        writable: true,
        enumerable: true,
        configurable: false
    },
    completed: {
        value: true,
        writable: true,
        enumerable: true,
        configurable: false
    }
});

module.exports = todo;