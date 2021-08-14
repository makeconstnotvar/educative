class SllNode {
  constructor(data) {
    this.data = data;
    this.next = null;
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
    while (current.next != null) {
      current = current.next;
    }
    return current;
  }

  insertAtTail(data) {
    let node = new SllNode(data);
    if (this.isEmpty)
      this.head = node;
    else
      this.last.next = node;
    this.len++;
    return this;
  }

  insertAtHead(data) {
    let node = new SllNode(data);
    node.next = this.head;
    this.head = node;
    this.len++;
    return this;
  };

  delete(data) {
    if (this.head.data === data) {
      this.head = this.head.next;
      this.len--;
      return true;
    }
    let current = this.head;
    while (current.next != null) {
      if (current.next.data === data) {
        current.next = current.next.next;
        this.len--;
        return true
      } else
        current = current.next;
    }
    return false;
  };

  deleteAtTail() {
    if (this.isEmpty)
      return false;
    if (this.head.next == null) {
      this.head = null;
      this.len--;
      return true;
    }
    let current = this.head;
    while (current.next.next != null) {
      current = current.next;
    }
    this.len--;
    current.next = null;
    return true;
  }

  deleteAtHead() {
    if (this.isEmpty)
      return false;
    this.len--;
    this.head = this.head.next
    return this;
  };

  search(data) {
    let current = this.head;
    while (current.data !== data && current.next != null) {
      current = current.next;
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
        current = current.next;
      }
      console.log(results.join(' -> '))
    }

  }

  getHead() {
    return this.head;
  }

  get length() {
    return this.len;
  }

  reverse() {
    let reversed = null, tail = null;
    let current = this.head;
    while (current != null) {
      tail = current.next;
      current.next = reversed;
      reversed = current;
      current = tail;
    }
    this.head = reversed;
  }

  get hasLoop() {
    let slow = this.head,
      fast = this.head;
    while (slow != null & fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast)
        return true;
    }
    return false;
  }

  findMid() {
    const midIndex = Math.ceil(this.len / 2);
    /*
    let idx = 1;
    let current = this.head;
    while (idx < midIndex && current.next != null) {
      idx++;
      current = current.next;
    }
    return current.data;
    */
    if (!this.isEmpty) {
      let slow = this.head;
      let fast = this.head;
      while (slow.next != null && fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
      }
      return slow.data;
    }
  }

  findNth() {

  }

  removeDuplicates() {

  }

}

let list = new SinglyLinkedList();

for (let i = 1; i <= 5; i++) {
  list = list.insertAtTail(i);
}

list.log();

//list.reverse();
//list.head.next.next.next.next.next  = list.head.next;
if (!list.hasLoop) {
  console.log('hasLoop', list.hasLoop);
  console.log('length', list.length);
}
//console.log('mid', list.findMid());

function func(head) {
  if (head == null) {
    return;
  }
  console.log('func',head.data);

  if (head.next) {
    func(head.next.next);
  }
  console.log('func',head.data);
}

func(list.getHead());

module.exports = {SinglyLinkedList, SllNode}
