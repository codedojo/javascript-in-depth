'use strict';

function createList(initialItems = []) {
    let items = initialItems;

    function getLength() {
        return items.length;
    }

    function add(item) {
        items.push(item);
    }

    function get(index) {
        return items[index];
    }

    function set(index, item) {
        items[index] = item;
    }

    function remove(item) {
        let index = items.indexOf(item);

        if (index > -1) {
            items.splice(index, 1);
        }
    }

    function toString() {
        return items.toString();
    }

    return {
        items,
        getLength,
        add,
        get,
        set,
        remove,
        toString
    };
}



module.exports = createList;