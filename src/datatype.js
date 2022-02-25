"use strict";
// 05-基础类型
// 原始类型
const bool = true;
let num = 123;
const str = 'abc';
// str = 123
// 数组
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
// 元组
const tuple = [0, '1'];
// tuple.push(2)
// console.log(tuple)
// tuple[2]
// 函数
const add = (x, y) => { return x + y; };
let compute;
compute = (a, b) => { return a + b; };
// 对象
const obj = { 'x': 1, 'y': 2 };
obj.x = 3;
// symbol
const s1 = Symbol();
const s2 = Symbol();
console.log(s1 === s2);
// undefiend, null
const un = undefined;
const nu = null;
num = undefined;
num = null;
// void
const noReturn = () => { };
// any
let x;
x = 1;
x = [];
x = () => { };
// never
const error = () => {
    throw new Error('error');
};
const endless = () => {
    while (true) { }
};
