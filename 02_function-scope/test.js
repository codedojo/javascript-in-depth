const fs = require('fs');
const path = require('path');

const asciiScope = require('../util/ascii-scope');

test('В функции `print` объвялена переменная `name`', done => {
    fs.readFile(path.join(__dirname, 'index.js'), (error, code) => {
        if (error) throw error;

        expect(asciiScope(code)).toEqual(['(global)', '\tprint()', '\t- var name'].join('\n'));

        done();
    });
});