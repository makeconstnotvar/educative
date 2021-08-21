class Stack {
  constructor(items) {
    this.items = items || [];
    this.top = null;
  }

  getTop() {
    if (this.items.length == 0)
      return null;
    return this.top;
  }

  isEmpty() {
    return this.items.length == 0;
  }

  size() {
    return this.items.length;
  }

  push(element) {
    this.items.push(element);
    this.top = element;
  }

  pop() {
    if (this.items.length != 0) {
      if (this.items.length == 1) {
        this.top = null;
        return this.items.pop();
      } else {
        this.top = this.items[this.items.length - 2];
        return this.items.pop();
      }

    } else
      return null;
  }
log(){
    console.log(this.items)
}

}
function sortStack(stack) {
  //1. Use a second tempStack.
  var tempStack = new Stack();
  var value;
  while (stack.isEmpty() == false) {
    //2. Pop value from mainStack.
    value = stack.pop();
    //3. If the value is greater than or equal to the top of tempStack, then push the value in tempStack
    if (value >= tempStack.getTop()) {
      tempStack.push(value)
    } else {
      // else pop all values from tempStack and push them in mainStack
      while (tempStack.isEmpty() == false) {
        stack.push(tempStack.pop());
      }
      // and in the end push value in tempStack
      tempStack.push(value);
    }
    //4.repeat from step 2 till mainStack is not empty.
  }
//5. When mainStack will be empty, tempStack will have sorted values in descending order.
//6. Now transfer values from tempStack to mainStack to make values sorted in ascending order.
  while (tempStack.isEmpty() == false) {
    stack.push(tempStack.pop());

  }
  return stack;

}
function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const len = 35;
const items = new Array(len)
for (let i = 0; i < len; i++) {
  items[i] = getRandomArbitrary(0, 100);
}
var stack =new Stack(items)

let start = process.hrtime();

sortStack(stack)
let stop = process.hrtime(start)
console.log(`Время: ${(stop[0] * 1e9 + stop[1]) / 1e9} сек`)

 stack.log()
