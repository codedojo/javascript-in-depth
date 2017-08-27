'use strict';

let todo = {
    title: 'Разобраться с методами конфигурациии объекта',
    completed: true
};

let propertyDescriptors = Object.getOwnPropertyDescriptors(todo);



module.exports = propertyDescriptors;