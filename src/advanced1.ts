/* 
* X 兼容 Y: X(目标类型) = Y(源类型)
*/

let s: string = 'a'
s = null;

// 接口兼容性
interface X {
    a: any;
    b: any;
}
interface Y {
    a: any;
    b: any;
    c: any;
}
let x: X = {a: 1, b: 2}
let y: Y = {a: 1, b: 2, c: 3}
x = y;
// 函数兼容性
type Handler = (a: number, b: number) => void
function hof(Handler: Handler) {
    return Handler
}

//1)参数个数
let handler1 = (a: number) => {}
hof(handler1)
let handler2 = (a: number, b: number, c:number) => {}
// hof(handler2)

// 可选参数和生育参数
let a = (p1: number, p2: number) => {}
let b= (p1?: number, p2?: number) => {}
let c = (...args: number[]) => {}
a = b
a = c 
b = c
b = a 
c = a 
c = b

//2)参数类型
let handler3 = (a: string) => {}
// hof(handler3)

interface Point3D {
    x: number;
    y: number;
    z: number;
}
interface Point2D {
    x: number;
    y: number;
}
let p3d = (point: Point3D) => {};
let p2d = (point: Point2D) => {};
p3d = p2d 
p2d = p3d 

//3)返回值类型
let f = () => ({name: 'Alice'});
let g = () => ({name: 'Alice', location: 'Beijing'});
f = g
// g = f

function overload(a: number, b: number): number;
function overload(a: string, b: string): string;
function overload(a: any, b: any): any {}

// 枚举兼容性
enum Fruit { Apple, Banana }
enum Color { Red, Yellow }
let fruit: Fruit.Apple = 3
let no: number = Fruit.Apple
let color: Color.Red = Fruit.Apple

// 类兼容性
class A {
    constructor(p: number, q: number) {}
    id: number = 1
    private name: string = ''
}
class B {
    static s = 1
    constructor(p: number) {}
    id: number = 2
    private name: string = ''
}
let aa = new A(1, 2);
let bb = new B(1)
// aa = bb
// bb = aa
class C extends A {}
let cc = new C(1, 2)
aa = cc 
cc = aa 

// 泛型兼容性
interface Empty<T> {
    value: T
}
// let obj1: Empty<number> = {};
// let obj2: Empty<string> = {};
// obj1 = obj2

let log1 = <T>(x: T): T => {
    console.log('x')
    return x
}
let log2 = <U>(y: U): U => {
    console.log('y')
    return y
}
log1 = log2