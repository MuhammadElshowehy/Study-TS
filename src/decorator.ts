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
function WithTemplate(temp: string, id: string) {             // factory function
  return function(target: Function) {                         // actual decorator
    // console.log(target);                                      
    let el: HTMLElement = document.getElementById(id)!;       
    el.innerHTML = temp;
    let header = el.querySelector("h1")!;
    let obj: Component = new Component();
    header.textContent = obj.name.toUpperCase();
    header.style.fontFamily = "arial";
  }
}


@WithTemplate("<h1></h1>", "header")
class Component {
  constructor() {}
  name = "muhammad";
}