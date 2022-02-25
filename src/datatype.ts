// 05-基础类型

// 原始类型
const bool: boolean = true;
let num: number | undefined | null = 123;
const str: string = 'abc';
// str = 123

// 数组
const arr1: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];

// 元组
const tuple: [number, string] = [0, '1'];
// tuple.push(2)
// console.log(tuple)
// tuple[2]

// 函数
const add = (x: number, y: number) => { return x + y; };
let compute: (x: number, y:number) => number;
compute = (a, b) => { return a + b; };

// 对象
const obj: {x: number, y: number} = { 'x': 1, 'y': 2 };
obj.x = 3;

// symbol
const s1: symbol = Symbol();
const s2 = Symbol();
console.log(s1 === s2);

// undefiend, null
const un: undefined = undefined;
const nu: null = null;
num = undefined;
num = null;

// void
const noReturn = () => {};

// any
let x;
x = 1;
x = [];
x = () => {};

// never
const error = () => {
  throw new Error('error');
};
const endless = () => {
  while (true) {}
};
