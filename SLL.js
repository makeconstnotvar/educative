class SllNode {
  constructor(data) {
    this.data = data;
    this.nextSibling = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.len = 0;
  }

  get isEmpty() {
    return this.head == null;
  }

  get last() {
    let current = this.head;
    while (current.nextSibling != null) {
      current = current.nextSibling;
    }
    return current;
  }

  insertAtTail(data) {
    let node = new SllNode(data);
    if (this.isEmpty)
      this.head = node;
    else
      this.last.nextSibling = node;
    this.len++;
    return this;
  }

  insertAtHead(data) {
    let node = new SllNode(data);
    node.nextSibling = this.head;
    this.head = node;
    this.len++;
    return this;
  };

  delete(data) {
    if (this.head.data === data) {
      this.head = this.head.nextSibling;
      this.len--;
      return true;
    }
    let current = this.head;
    while (current.nextSibling != null) {
      if (current.nextSibling.data === data) {
        current.nextSibling = current.nextSibling.nextSibling;
        this.len--;
        return true
      } else
        current = current.nextSibling;
    }
    return false;
  };

  deleteAtTail() {
    if (this.isEmpty)
      return false;
    if (this.head.nextSibling == null) {
      this.head = null;
      this.len--;
      return true;
    }
    let current = this.head;
    while (current.nextSibling.nextSibling != null) {
      current = current.nextSibling;
    }
    this.len--;
    current.nextSibling = null;
    return true;
  }

  deleteAtHead() {
    if (this.isEmpty)
      return false;
    this.len--;
    this.head = this.head.nextSibling
    return this;
  };

  search(data) {
    let current = this.head;
    while (current.data !== data && current.nextSibling != null) {
      current = current.nextSibling;
    }
    return current || null
  };

  log() {
    if (this.isEmpty) {
      console.log("empty")
    } else {
      let results = [];
      let current = this.head;
      while (current != null) {
        results.push(current.data);
        current = current.nextSibling;
      }
      console.log(results.join(' -> '))
    }

  }

  get length() {
    return this.len;
  }

  reverse() {
    let reversed = null, tail = null;
    let current = this.head;
    while (current != null) {
     tail = current.nextSibling;
     current.nextSibling = reversed;
     reversed = current;
     current = tail;
    }
    this.head = reversed;
  }
}

let list = new SinglyLinkedList();

for (let i = 0; i < 10; i++) {
  list = list.insertAtTail(i);
}
list.log();

list.reverse();

list.log();

console.log(list.length);


module.exports = {SinglyLinkedList, SllNode}
