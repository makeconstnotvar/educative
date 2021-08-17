const Stack = require("./stack");
const Queue = require("./queue");

let stack = new Stack();

for (let i = 0; i < 5; i++) {
  stack.push(i);
}
//1
console.log("Is stack empty? " + stack.isEmpty());
console.log("top: " + stack.getTop());

for (let i = 0; i < 5; i++) {
  console.log("Element popped: " + stack.pop());
  console.log("top: " + stack.getTop());
}

console.log("Is stack empty?: " + stack.isEmpty());
console.log("top: " + stack.getTop());


const queue = new Queue();
console.log("You have successfully created a Queue.");