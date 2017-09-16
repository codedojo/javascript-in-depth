'use strict';

const http = {
    get(url, done) {
        let request = new XMLHttpRequest();
        
        request.onload = function() {
            if (this.status === 200) {
                try {
                    let data = JSON.parse(this.responseText);
                    done(null, data);
                } catch (error) {
                    done(error);
                }
            } else {
                done(new Error(this.statusText));
            }
        };
    
        request.onerror = function(error) {
            done(error);
        };
    
        request.open('GET', url);
        request.send();
    }
};



module.exports = http;