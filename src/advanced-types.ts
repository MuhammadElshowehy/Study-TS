console.log("##### Advanced Types #####");

type strOrNum = string | number;

function addition(a: number, b: strOrNum): strOrNum {
  if (typeof b === "number") {
    return a + b;
  } else {
    return a + b;
  }
}

console.log(addition(2, 3));
console.log(addition(2, "3"));
// //////////////////////////////////////////////////////////////
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

// let username = <HTMLInputElement>document.getElementById("userName")!;
let username = document.getElementById("userName")! as HTMLInputElement;
username.value = "test";
console.log(username);

// index props //
interface One {
  [key: string]: string;
}

interface Two {
  [index: number]: number;
}

interface Three {
  [key: string]: string;
  [index: number]: string;
}

interface Four {
  [key: string]: string | number;
  [index: number]: string;
  id: number;
}

const one: One = {
  name: "ali",
};

const two: Two = {
  0: 9,
};

const three: Three = {
  name: "jj",
  9: "nine",
};

const four: Four = {
  id: 3,
  3: "three",
  age: 25,
  job: "frontend developer",
};

// function overload //
console.log("##### func overload #####");
function add(a: number, b: number): number; // function signature
function add(a: string, b: string): number; // function signature
function add(a: string, b: number): number; // function signature
function add(a: number, b: string): number; // function signature

function add(a: strOrNum, b: strOrNum): strOrNum {
  if (typeof a === 'string' || typeof b === 'string') {
    return a + ' ' + b;
  } else {
    return a + b;
  }
}

console.log(add(1, 2));
console.log(add('Muhammad', 'Elshowehy'));
console.log(add(1, "elshowehy"));
console.log(add('elshowehy', 1));

const object = {
  name: null
}

console.log(object?.name);
