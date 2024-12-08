console.log("##### Generics #####");

function merge<T, U>(obj1: T, obj2: U): T & U {
  return Object.assign({}, obj2, obj1);
}

const merged = merge({ age: 25 }, { name: "mhmd" });
console.log(merged.name);
console.log(merged.age);

function addition<T1, T2>(num1: T1, num2: T2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    alert("Unsupported type!");
  }
}

// let sum = addition<number, number>(3, 4);
// let sum1 = addition<string, number>('3', 4);
// let sum2 = addition<number, number>(3, 4);
// console.log(sum);
