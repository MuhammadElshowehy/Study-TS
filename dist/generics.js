"use strict";
console.log("##### Generics #####");
function merge(obj1, obj2) {
    return Object.assign({}, obj2, obj1);
}
const merged = merge({ age: 25 }, { name: "mhmd" });
console.log(merged.name);
console.log(merged.age);
function genericAddition(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else {
        alert("Unsupported type!");
    }
}
// let sum = genericAddition<number, number>(3, 4);
// let sum1 = genericAddition<string, number>('3', 4);
// let sum2 = genericAddition<number, number>(3, 4);
// console.log(sum);
//# sourceMappingURL=generics.js.map