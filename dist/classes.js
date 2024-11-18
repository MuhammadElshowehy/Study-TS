"use strict";
// class Person {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   personInfo() {
//     return `${this.name} has ${this.age} years old.`;
//   }
//   muhammad = new Person("Muhammad", 25);
// }
// // fast end easy way to declare class //
// class Person {
//   constructor(public name: string, protected age: number, private salary: number) {}
//   personInfo() {
//     return `${this.name} has ${this.age} years old and his salary is ${this.salary}.`;
//   }
// }
class Person {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    personInfo() {
        return `${this.name} has ${this.age} years old and his salary is ${this.salary}.`;
    }
}
class Department extends Person {
    constructor(department, admins, name, age, salary) {
        super(name, age, salary);
        this.department = department;
        this.admins = admins;
    }
}
const obj = new Department("IT", ["bassem"], "Ahmed", 25, 2000);
// console.log(obj);
// singleton pattern //
class SingleObj {
    constructor(name) {
        this.name = name;
    }
    static getInstance() {
        if (!SingleObj.instance) {
            SingleObj.instance = new SingleObj("ahmed");
            console.log(SingleObj.instance);
        }
        return SingleObj.instance;
    }
}
const single = SingleObj.getInstance();
single.name = "Muhammad";
console.log(single);
//# sourceMappingURL=classes.js.map