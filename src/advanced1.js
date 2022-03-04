"use strict";
/*
* X 兼容 Y: X(目标类型) = Y(源类型)
*/
let s = 'a';
s = null;
let x = { a: 1, b: 2 };
let y = { a: 1, b: 2, c: 3 };
x = y;
function hof(Handler) {
    return Handler;
}
//1)参数个数
let handler1 = (a) => { };
hof(handler1);
let handler2 = (a, b, c) => { };
// hof(handler2)
// 可选参数和生育参数
let a = (p1, p2) => { };
let b = (p1, p2) => { };
let c = (...args) => { };
a = b;
a = c;
b = c;
b = a;
c = a;
c = b;
//2)参数类型
let handler3 = (a) => { };
let p3d = (point) => { };
let p2d = (point) => { };
p3d = p2d;
p2d = p3d;
//3)返回值类型
let f = () => ({ name: 'Alice' });
let g = () => ({ name: 'Alice', location: 'Beijing' });
f = g;
function overload(a, b) { }
// 枚举兼容性
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Banana"] = 1] = "Banana";
})(Fruit || (Fruit = {}));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
})(Color || (Color = {}));
let fruit = 3;
let no = Fruit.Apple;
let color = Fruit.Apple;
// 类兼容性
class A {
    constructor(p, q) {
        this.id = 1;
        this.name = '';
    }
}
class B {
    constructor(p) {
        this.id = 2;
        this.name = '';
    }
}
B.s = 1;
let aa = new A(1, 2);
let bb = new B(1);
// aa = bb
// bb = aa
class C extends A {
}
let cc = new C(1, 2);
aa = cc;
cc = aa;
// let obj1: Empty<number> = {};
// let obj2: Empty<string> = {};
// obj1 = obj2
let log1 = (x) => {
    console.log('x');
    return x;
};
let log2 = (y) => {
    console.log('y');
    return y;
};
log1 = log2;
