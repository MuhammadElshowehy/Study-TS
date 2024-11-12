"use strict";
const person = {
    name: "Muhammad",
    age: 25,
};
console.log(person.name, person.age);
const arr = ["one", "two"];
const mixedArr = ["one", 1];
console.log(arr);
console.log(mixedArr);
let array = new Array(3);
array = [1, 2];
array.push(4);
console.log(array);
// tuples //
let tuple = ["one", 2];
let optionalTuple = ["we"];
let restTuple = ["one", 2, 4, 5, 6];
let namedTuple = ["muhammad", 25];
// Enum //
// enum Role {ADMIN ="ADMIN", AUTHOR = "20", SUPER_ADMIN = 1};
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 2] = "ADMIN";
    Role[Role["AUTHOR"] = 3] = "AUTHOR";
    Role[Role["SUPER_ADMIN"] = 1] = "SUPER_ADMIN";
})(Role || (Role = {}));
;
console.log(Role);
console.log(Role.ADMIN);
console.log(Role.AUTHOR);
console.log(Role.SUPER_ADMIN);
console.log(Role[2]);
let result;
result = "one"; // ok
// result = "oneeee"; // refused
// void && never //
function summation(num1, num2) {
    const result = +num1 + +num2;
    console.log(result);
}
console.log(summation(1, 3));
// func type & callback //
const numbers = [1, 4, 6, 7, 90, 40, 57];
const filtration = function () {
    let filtered = [];
    numbers.filter((num) => {
        if (num <= 50) {
            filtered.push(num);
        }
    });
    return filtered;
};
console.log(filtration());
function sendRequest(data, cb) {
    // ... sending a request with "data"
    return cb({ data: 'Hi there!' });
}
sendRequest('Send this!', (response) => {
    // console.log(response);
    return true;
});
// flat array //
const dddd = [1, 3, [3, 4]];
console.log(dddd.flat());
let ffff;
//# sourceMappingURL=app.js.map