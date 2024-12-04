"use strict";
// interface //
console.log("##### Interface #####");
let userOne = {
    name: "muhammad",
    child: 4,
    greet(phrase) {
        return `Hi, Iam ${this.name}.`;
    }
};
console.log(userOne.greet("Hi, Iam"));
class Laptop {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}
let testObj = {
    age: 25,
    // name: 'muhammad'
};
// type Add = (a: number, b: number) => number;
const Add = (a, b) => a + b;
// end of interface //
//# sourceMappingURL=interface.js.map