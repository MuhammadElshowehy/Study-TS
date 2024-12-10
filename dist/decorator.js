"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
console.log("##### decorators #####");
// function logger(target: Function) {
//   console.log("logging...");
//   console.log(target);
// }
// @logger
// class Logging {
//   name = "Muhammad";
//   constructor() {
//     console.log(this.name);
//   }
// }
// setTimeout(() => {
//   new Logging();
// }, 3000);
// decorator factories //
// function logger(text: string) {
//   return function(target: Function) {
//     console.log(text);
//     console.log(target);
//   }
// }
// @logger("Muhammad")
// class Logging {
//   name = "Muhammad";
//   constructor() {
//     console.log(this.name);
//   }
// }
// template decorator //
function WithTemplate(temp, id) {
    return function (target) {
        // console.log(target);                                      
        let el = document.getElementById(id);
        el.innerHTML = temp;
        let header = el.querySelector("h1");
        let obj = new Component();
        header.textContent = obj.name.toUpperCase();
        header.style.fontFamily = "arial";
    };
}
let Component = class Component {
    constructor() {
        this.name = "muhammad";
    }
};
Component = __decorate([
    WithTemplate("<h1></h1>", "header"),
    __metadata("design:paramtypes", [])
], Component);
//# sourceMappingURL=decorator.js.map