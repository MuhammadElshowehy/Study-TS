// interface //
console.log("##### Interface #####");

interface Father {
  name: string;
  child: number;
  greet(phrase: string): string;
}

let userOne: Father = {
  name: "muhammad",
  child: 4,
  greet(phrase) {
    return `Hi, Iam ${this.name}.`;
  }
}

console.log(userOne.greet("Hi, Iam"));

class Laptop implements Factory {
  public name: string;
  public type: string;

  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }


}

interface Factory {
  readonly name?: string;
}

interface Rere extends Factory {
  age: number;
}

let testObj: Rere = {
  age: 25,
  // name: 'muhammad'
}

// interface as func //
interface Add {
  (a: number, b: number): number;
}
// type Add = (a: number, b: number) => number;

const Add: Add = (a: number, b: number) => a + b;

// end of interface //