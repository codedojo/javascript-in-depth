'use strict';

function parseJSON(json) {
    return new Promise((resolve, reject) => {
        try {
            let data = JSON.parse(json);
            resolve(data);
        } catch (error) {
            reject(error);
        }
    });
}



module.exports = parseJSON;