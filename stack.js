class Stack {
  constructor(items = [], initMin = true) {
    this.items = items.reverse();
    if (initMin) {
      const m = Math.min(...this.items);
      this.minimum = new Stack(this.items.map(x => m), false);
    }
    let len = items.length;
    this.last = len ? this.items[len - 1] : null;
  }

  push(value) {
    if (this.minimum) {
      if (value <= this.minimum.last || this.minimum.empty) {
        this.minimum.push(value)
      } else {
        this.minimum.push(this.minimum.last)
      }
    }

    this.items.push(value);
    this.last = value;
  }

  pop() {
    this.minimum.pop();
    const last = this.items.pop();
    const len = this.items.length;
    this.last = (!last || len == 0) ? null : this.items[len - 1]
    return last;
  }

  get min() {
    return this.minimum.last;
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
    return this.items || [];
  }

  log() {
    console.log('main', this.items);
    console.log('mins', this.minimum.items);
  }
}

module.exports = Stack;
