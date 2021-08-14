class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element){
    this.items.push(element);
  }
  dequeue(){
    return this.items.shift();
  }
  isEmpty(){
    return this.items.length == 0;
  }
  getFront(){
    return this.items[0];
  }
  size(){
    return this.items.length;
  }
}

const myQueue = new Queue();
console.log("You have successfully created a Queue.");