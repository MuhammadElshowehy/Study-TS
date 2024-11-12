"use strict";
console.log("Hi Typescript");
function calc(one, two, show, phrase) {
    if (show) {
        const sum = one + two;
        return phrase + sum;
    }
}
console.log(calc(2, 5, true, "The result is: "));
// end of basics //
//# sourceMappingURL=basics.js.map