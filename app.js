var person = {
    name: "Muhammad",
    age: 25,
};
console.log(person.name, person.age);
var arr = ["one", "two"];
var mixedArr = ["one", 1];
console.log(arr);
console.log(mixedArr);
var array = new Array(3);
array = [1, 2];
array.push(4);
console.log(array);
// tuples //
var tuple = ["one", 2];
var optionalTuple = ["we"];
var restTuple = ["one", 2, 4, 5, 6];
var namedTuple = ["muhammad", 25];
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
var result;
result = "one"; // ok
// result = "oneeee"; // refused
// void && never //
function summation(num1, num2) {
    var result = +num1 + +num2;
    console.log(result);
}
console.log(summation(1, 3));
// func type & callback //
// const numbers: number[] = [1, 4, 6, 7, 90, 40, 57];
// const filtration = function(): number[] {
//   let filtered: number[] = [];
//   numbers.filter((num: number): void => {
//     if (num <= 50) {
//       filtered.push(num); 
//     }
//   });
//   return filtered;
// }
// console.log(filtration());
function sendRequest(data, cb) {
    // ... sending a request with "data"
    return cb({ data: 'Hi there!' });
}
sendRequest('Send this!', function (response) {
    console.log(response);
    return true;
});
console.log(sendRequest);
