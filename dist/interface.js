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
//# sourceMappingURL=interface.js.map