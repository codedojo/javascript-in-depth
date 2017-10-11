const set = {
    items: {},

    has(value) {
        return this.items.hasOwnProperty(value);
    },

    add(value) {
        if (!this.has(value)) {
            this.items[value] = value;
        }

        return this;
    },

    delete(value) {
        if (this.has(value)) {
            delete this.items[value];
            return true;
        }

        return false;
    },

    clear() {
        this.items = {};
        return this;
    },

    size() {
        return Object.keys(this.items).length;
    },

    keys() {
        return Object.keys(this.items);
    },

    values() {
        return Object.values(this.items);
    },

    entries() {
        return Object.entries(this.items);
    },

    forEach(callback) {
        for (let key in this.items) {
            let value = this.items[key];

            callback(value, key, this);
        }
    }
};

module.exports = () => set;