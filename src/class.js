"use strict";
class Dog {
    constructor(name) {
        this.name = 'dog';
        this.legs = 4;
        this.name = name;
    }
    run() { }
    pri() { }
    pro() { }
}
Dog.food = 'bones';
console.log(Dog.prototype);
let dog = new Dog('wangwang');
console.log(dog);
// dog.pri()
// dog.pro()
console.log(Dog.food);
class Husky extends Dog {
    constructor(name, color) {
        super(name);
        this.color = color;
        this.color = color;
        // this.pri()
        this.pro();
    }
}
console.log(Husky.food);
