const Stack = require("./stack");

class Stackqueue {
  constructor(items) {
    this.stack = new Stack(items);
    this.temp = new Stack();
  }

  push(value) {
    this.stack.push(value);
  }

  shift() {
    if (!this.temp.empty) {
      return this.temp.pop();
    } else {
      while (!this.stack.empty) {
        this.temp.push(this.stack.pop())
      }
      return this.temp.pop();
    }
  }

  get empty() {
    return this.stack.size == 0;
  }

  get size() {
    return this.stack.size;
  }

  get data() {
    return Array.prototype.concat([...this.temp.data].reverse(), this.stack.data);
  }
}

const sq = new Stackqueue();
sq.push(1);
sq.push(2);
sq.push(3);
console.log('arr',sq.data);
console.log('s', sq.shift());
sq.push(4);
sq.push(5);
console.log('arr',sq.data);
console.log('s', sq.shift());
sq.push(6);
sq.push(7);
console.log('arr',sq.data);
console.log('s',sq.shift());
console.log('s',sq.shift());
console.log('arr',sq.data);
sq.push(8);
console.log('s',sq.shift());
console.log('s',sq.shift());
console.log('arr',sq.data);