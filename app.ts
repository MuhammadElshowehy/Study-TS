const person: {
  name: string;
  age: number;
} = {
  name: "Muhammad",
  age: 25,
};
console.log(person.name, person.age);


const arr: string[] = ["one", "two"];
const mixedArr: (number | string)[] = ["one", 1];
console.log(arr);
console.log(mixedArr);

let array = new Array(3);
array = [1, 2];
array.push(4)
console.log(array);

// tuples //
let tuple: [string, number] = ["one", 2];
let optionalTuple: [string, number?] = ["we"];
let restTuple: [string, ...number[]] = ["one", 2, 4, 5, 6];

type person = [name: string, age: number];
let namedTuple: person = ["muhammad", 25]

// Enum //
// enum Role {ADMIN ="ADMIN", AUTHOR = "20", SUPER_ADMIN = 1};
enum Role {ADMIN = 2, AUTHOR = 3, SUPER_ADMIN = 1};
console.log(Role);
console.log(Role.ADMIN);
console.log(Role.AUTHOR);
console.log(Role.SUPER_ADMIN);
console.log(Role[2]);

let result: "one" | "two";

result = "one"; // ok
// result = "oneeee"; // refused

// void && never //
function summation (num1: number, num2: number): void {
  const result = +num1 + +num2;
  console.log(result);
}

console.log(summation(1, 3));


type funcType = (n1: number, n2: number) => number;


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


function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({data: 'Hi there!'});
}

sendRequest('Send this!', (response) => { 
  console.log(response);
  return true;
});

