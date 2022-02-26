"use strict";
class Asian {
    constructor(name) {
        this.name = name;
    }
    eat() { }
    ;
    sleep() { }
}
let boy = {
    name: '',
    run() { },
    eat() { },
    cry() { }
};
class Auto {
    constructor() {
        this.state = 1;
        // private state2 = 0
    }
}
class C {
    constructor() {
        this.state = 1;
    }
}
class Bus extends Auto {
}
