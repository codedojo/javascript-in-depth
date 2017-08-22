const set = {
    store: [],

    length() {
        return this.store.length;
    },

    size() {
        return this.store.length;
    },

    add(val) {
        for (let i = 0; i < this.store.length; i++) {
            if (this.store[i] === val) {
                return this;
            }
        };
        this.store.push(val);
        return this;
    },

    clear() {
        this.store = []
        return this;
    },

    delete(val) {
        let index = this.store.indexOf(val)
        if ( index === -1 ) {
            return false;
        } else {
            this.store.splice(index, 1);
            return true;
        }
    },

    entries() {
        let out = [];
        for (let i = 0; i < this.store.length; i++) {
            out.push([this.store[i], this.store[i]])
        };
        return out;
    },

    forEach(cb, ...args) {
        for (let i = 0; i < this.store.length; i++) {
            cb(this.store[i], this.store[i], this);
        };
    },

    has(val) {
        for (let i = 0; i < this.store.length; i++) {
            if (this.store[i] === val) {
                return true;
            }
        }
        return false;
    },

    values() {
        return this.store;
    },
    
    keys() {
        return this.store;
    }

};


module.exports = () => set;