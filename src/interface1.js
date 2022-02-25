"use strict";
// let add: (x:number,y:number) => number
let adds = (a, b) => a + b;
function getLib() {
    let lib = (() => { });
    lib.version = '1.0';
    lib.doSomething = () => { };
    return lib;
}
let lib1 = getLib();
lib1();
lib1.doSomething();
let lib2 = getLib();
