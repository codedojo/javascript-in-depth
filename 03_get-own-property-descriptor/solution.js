'use strict';

let todo = {
    title: 'Разобраться с методами конфигурациии объекта'
};

let propertyDescriptor = Object.getOwnPropertyDescriptor(todo, 'title');



module.exports = propertyDescriptor;