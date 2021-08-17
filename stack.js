class Stack {
  constructor(items = []) {
    this.items = items;
    let len = items.length;
    this.last = len ? items[len - 1] : null;
  }

  push(element) {
    this.items.push(element);
    this.last = element;
  }

  pop() {
    const last = this.items.pop();
    const len = this.items.length;
    this.last = (!last || len == 0) ? null : this.items[len - 1]
    return last;
  }

  get empty() {
    return this.items.length == 0;
  }

  get top() {
    return this.last;
  }

  get size() {
    return this.items.length;
  }

  get data() {
    return this.items;
  }
}

module.exports = Stack;
