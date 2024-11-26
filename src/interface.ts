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
  name: string;
}