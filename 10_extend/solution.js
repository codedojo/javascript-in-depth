'use strict';

function extend(Subclass, Superclass) {
    function F() {};
    F.prototype = Superclass.prototype;
    Subclass.prototype = new F();
    Subclass.prototype.constructor = Subclass;
}



module.exports = extend;