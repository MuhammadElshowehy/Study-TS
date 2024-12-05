"use strict";
console.log("##### Advanced Types #####");
function addition(a, b) {
    if (typeof b === "number") {
        return a + b;
    }
    else {
        return a + b;
    }
}
console.log(addition(2, 3));
console.log(addition(2, "3"));
// let username = <HTMLInputElement>document.getElementById("userName")!;
let username = document.getElementById("userName");
username.value = "test";
console.log(username);
const one = {
    name: "ali",
};
const two = {
    0: 9,
};
const three = {
    name: "jj",
    9: "nine",
};
const four = {
    id: 3,
    3: "three",
    age: 25,
    job: "frontend developer",
};
// function overload //
console.log("##### func overload #####");
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a + ' ' + b;
    }
    else {
        return a + b;
    }
}
console.log(add(1, 2));
console.log(add('Muhammad', 'Elshowehy'));
console.log(add(1, "elshowehy"));
console.log(add('elshowehy', 1));
const object = {
    name: null
};
console.log(object === null || object === void 0 ? void 0 : object.name);
//# sourceMappingURL=advanced-types.js.map