"use strict";
class Log1 {
    run(value) {
        console.log(value);
        return value;
    }
}
let log1 = new Log1();
log1.run(1);
let log2 = new Log1();
log2.run('1');
function log3(value) {
    console.log(value, value.length);
    return value;
}
log3([1]);
log3('123');
log3({ length: 1 });
