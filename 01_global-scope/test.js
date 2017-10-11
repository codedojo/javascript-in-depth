const fs = require('fs');
const path = require('path');

const asciiScope = require('../util/ascii-scope');

test('В глобальной области видимости объявлена переменная `name`', done => {
    fs.readFile(path.join(__dirname, 'index.js'), (error, code) => {
        if (error) throw error;

        expect(asciiScope(code)).toEqual(['(global)', '- var name'].join('\n'));

        done();
    });
});