const fs = require('fs');
const path = require('path');

const asciiScope = require('../util/ascii-scope');

test('В функции `print` объвялена переменная `name` и локальная функция `log`, в которой объвялена локальная переменная `output`', done => {
    fs.readFile(path.join(__dirname, 'index.js'), (error, code) => {
        if (error) throw error;

        expect(asciiScope(code)).toEqual(['(global)', '\tprint()', '\t- var name', '\t\tlog()', '\t\t- var output'].join('\n'));

        done();
    });
});