"use strict";
class Animal {
    eat() {
        console.log('eat');
    }
}
class Dog1 extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }
    run() { }
    sleep() {
        console.log('dog sleep');
    }
}
let dog1 = new Dog1('wangwang');
dog1.eat();
class Cat extends Animal {
    sleep() {
        console.log('Cat sleep');
    }
}
let cat = new Cat();
let animals = [dog1, cat];
animals.forEach(i => {
    i.sleep();
});
class WorkFlow {
    step1() {
        return this;
    }
    step2() {
        return this;
    }
}
new WorkFlow().step1().step2();
class Myflow extends WorkFlow {
    next() {
        return this;
    }
}
new Myflow().next().step1().step2();
