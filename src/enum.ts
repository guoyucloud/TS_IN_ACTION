// 06-枚举类型

// 数字枚举
enum Role {
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest
}
console.log(Role.Reporter)
console.log(Role)

// 字符串枚举
enum Message {
    Success = '恭喜你，成功了',
    Fail = '抱歉，失败了'
}
console.log(Message)

// 异构枚举，容易混淆，不建议使用
enum Answer {
    N,
    Y = 'Yes'
}

// 枚举成员
// Role.Reporter = 2
enum Char {
// const
    a,
    b = Char.a,
    c= 1 + 3,
    d = Math.random(),
    e = '123'.length,
    f = 4
}
console.log(Char)

// 常量枚举
const enum Month {
    Jan,
    Feb,
    Mar
}
let month = [Month.Jan, Month.Feb, Month.Mar]
console.log(month)

// 枚举类型
enum E { a, b}
enum F { a = 0, b = 1}
enum G { a = 'apple', b = 'banana'}

let e: E = 3
let f: F = 3
// e === f

let e1: E.a = 1
let e2: E.b
// e1 === e2
let e3: E.a = 1
e1 === e3

let g1: G = G.b
let g2: G.a = G.a
