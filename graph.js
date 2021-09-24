const {SinglyLinkedList} = require("./sll");
const Queue = require("./queue");

class Graph {
  constructor(vertices = 1) {
    //Total number of vertices in the graph
    this.vertices = vertices;
    //Defining an array which can hold LinkedLists equal to the number of vertices in the graph
    this.list = [];
    //Creating a new LinkedList for each vertex/index of the list
    for (let i = 0; i < vertices; i++) {
      let temp = new SinglyLinkedList();
      this.list[i] = temp;
    }
  }

  addEdge(source, destination) {
    if (source <= this.vertices && destination <= this.vertices)
      this.list[source].insertAtTail(destination);
    //ненаправленный this.list[destination].insertAtHead(source)
  }

  printGraph() {
    let log = '';
    for (let i = 0; i < this.list.length; i++) {
      log += "{" + String(i) + "} => ";
      let temp = this.list[i].getHead();
      while (temp != null) {
        log += "[" + String(temp.data) + "] > ";
        temp = temp.next;
      }
      log += 'null\n'

    }
    console.log(log);
  }

  bfsTraversal_helper(source, visited, obj) {

    let queue = new Queue();
    queue.push(source);
    visited[source] = true;

    while (!queue.empty) {

      let current_node = queue.shift();
      obj.result += current_node;
      let temp = this.list[current_node].getHead();
      while (temp != null) {
        if (visited[temp.data] == false) {
          queue.shift(temp.data);
          visited[temp.data] = true;
        }
        temp = temp.next;
      }
    }
  }

  bfsTraversal() {
    if (this.vertices < 1) {
      return null;
    }

    let obj = {result: ''}

    let visited = [];
    for (let x = 0; x < this.vertices; x++) {
      visited.push(false);
    }

    for (let i = 0; i < this.vertices; i++) {
      if (!visited[i])
        this.bfsTraversal_helper(i, visited, obj);
    }

    return obj.result;
  }
}

const g = new Graph(5);
g.addEdge(1, 2)
g.addEdge(1, 3)
g.addEdge(2, 4)
g.addEdge(2, 5)
g.printGraph();
console.log(g.bfsTraversal());