function valueFn(arg) {
    return function() {
        return arg;
    }
}

module.exports = valueFn;