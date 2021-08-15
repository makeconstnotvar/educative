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

  get empty() {
    return this.items.length == 0;
  }

  getTop() {
    return this.top;
  }

  get size() {
    return this.items.length;
  }

  get data() {
    return this.items;
  }
}

module.exports = Stack;
