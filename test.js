const Stack = require("./stack");
const Queue = require("./queue");

let myStack = new Stack();

for (let i = 0; i < 5; i++) {
  myStack.push(i);
}
//1
console.log("Is stack empty? " + myStack.isEmpty());
console.log("top: " + myStack.getTop());

for (let i = 0; i < 5; i++) {
  console.log("Element popped: " + myStack.pop());
  console.log("top: " + myStack.getTop());
}

console.log("Is stack empty?: " + myStack.isEmpty());
console.log("top: " + myStack.getTop());


const myQueue = new Queue();
console.log("You have successfully created a Queue.");