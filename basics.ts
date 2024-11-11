console.log("Hi Typescript");

function calc(one: number, two: number, show: boolean, phrase: string) {
  if (show) {
    const sum: number = one + two;
    return phrase + sum;
  }
}

console.log(calc(2, 5, true, "The result is: "));

// end of basics //