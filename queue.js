class Queue {
  constructor(items = []) {
    this.items = items;
  }

  push(element) {
    this.items.push(element);
  }

  shift() {
    return this.items.shift();
  }

  get empty() {
    return this.items.length == 0;
  }

  get front() {
    const len = this.items.length;
    return len == 0 ? null : this.items[0];
  }

  get size() {
    return this.items.length;
  }

  get data() {
    return this.items;
  }
}

module.exports = Queue;