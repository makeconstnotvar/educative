class Stack {
  constructor() {
    this.items = [];
    this.top = null;
  }

  push(element) {
    this.items.push(element);
    this.top = element;
  }

  pop() {
    const last = this.items.pop();
    const len = this.items.length;
    this.top = (!last || len == 0) ? null : this.items[len - 1]
    return last;
  }

  isEmpty() {
    return this.items.length == 0;
  }

  getTop() {
    return this.top;
  }

  size() {
    return this.items.length;
  }
}

let myStack = new Stack();

for (let i = 0; i < 5; i++) {
  myStack.push(i);
}

console.log("Is stack empty? " + myStack.isEmpty());
console.log("top: " + myStack.getTop());

for (let i = 0; i < 5; i++) {
  console.log("Element popped: " + myStack.pop());
  console.log("top: " + myStack.getTop());
}

console.log("Is stack empty?: " + myStack.isEmpty());
console.log("top: " + myStack.getTop());