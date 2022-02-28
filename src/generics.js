"use strict";
function log(value) {
    console.log(value);
    return value;
}
log(['a', 'b']);
log(['a', 'b']);
let myLog = log;
myLog('1');
