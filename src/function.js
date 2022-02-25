"use strict";
// 函数定义
function add1(x, y) {
    return x + y;
}
let add2;
// add1(1,2,3)
function add5(x, y) {
    return y ? x + y : x;
}
add5(1);
function add6(x, y = 0, z, q = 1) {
    return x + y + z + q;
}
console.log(add6(1, undefined, 3));
function add7(x, ...rest) {
    return x + rest.reduce((pre, cur) => pre + cur);
}
console.log(add7(1, 2, 3, 4, 5));
function add8(...rest) {
    let first = rest[0];
    if (typeof first === 'string') {
        return rest.join('');
    }
    if (typeof first === 'number') {
        return rest.reduce((pre, cur) => pre + cur);
    }
}
console.log(add8(1, 2, 3));
console.log(add8('a', 'b', 'c'));
