const fs = require('fs');
const path = require('path');
const assert = require('assert');

const asciiScope = require('../util/ascii-scope');

describe('Область видимости:', () => {
    describe('Глобальня область видимости:', () => {
        it('В глобальной области видимости создайте переменную `name`', done => {
            fs.readFile(path.resolve('./exercises/exercise-1.js'), (error, code) => {
                assert.ifError(error);

                scopeAsAscii = asciiScope(code);

                assert.equal(
                    scopeAsAscii,
                    ['(global)', '- var name'].join('\n')
                );

                done();
            });
        });
    });

    describe('Область видимости функции:', () => {
        it('Напишите функцию `print`, имеющую одну локальную переменную `name`', done => {
            fs.readFile(path.resolve('./exercises/exercise-2.js'), (error, code) => {
                assert.ifError(error);

                scopeAsAscii = asciiScope(code);
                
                assert.equal(
                    scopeAsAscii,
                    ['(global)', '\tprint()', '\t- var name'].join('\n')
                );

                done();
            });
        });
    });

    describe('Цепочка областей видимости:', () => {
        it('Создайте функцию `print`, с локальной переменной `name` и локальной функцией `log`, в которой имеется локальная переменная `output`', done => {
            fs.readFile(path.resolve('./exercises/exercise-3.js'), (error, code) => {
                assert.ifError(error);

                scopeAsAscii = asciiScope(code);

                assert.equal(
                    scopeAsAscii,
                    ['(global)', '\tprint()', '\t- var name', '\t\tlog()', '\t\t- var name'].join('\n')
                );

                done();
            });
        });
    });

    describe('Засорение глобальной области видимости:', () => {
        it('Создайте функцию `print`, в рамках которой объявлена переменная `name`. Также в рамках фукнции `print`, идентификатору `value` (т.е. необъявленная переменная) присвойте любое значение. В рамках функции `print` также создайте локальную фукнцию `log`, в рамках которой объявлена переменная `name`.', done => {
            fs.readFile(path.resolve('./exercises/exercise-4.js'), (error, code) => {
                assert.ifError(error);

                scopeAsAscii = asciiScope(code);

                assert.equal(
                    scopeAsAscii,
                    ['(global)', '\tprint()', '\t- var name', '\t- value = ?', '\t\tlog()', '\t\t- var name'].join('\n')
                );

                done();
            });
        });
    });
});