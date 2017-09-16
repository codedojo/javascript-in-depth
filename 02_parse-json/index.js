'use strict';

function parseJSON(json, done) {
    try {
        let data = JSON.parse(json);
        done(null, data);
    } catch (error) {
        done(error);
    }
}



module.exports = parseJSON;